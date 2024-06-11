import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("Product name is required"),
  price: yup
    .number()
    .required("Price is required")
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .min(0, "Price must be greater than or equal to 0"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  images: yup.array().min(1, "At least one image URL is required"),
});

const EditProductForm = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState("");
  const [product, setProduct] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setNotification("Product not found");
        } else {
          console.error("Failed to fetch product:", error);
          setNotification("Failed to fetch product");
        }
      }
    };

    fetchProduct();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${id}`,
        data
      );
      if (response.status === 200) {
        setNotification("Product updated successfully!");
        setTimeout(() => {
          setNotification("");
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to update product:", error);
      setNotification("Failed to update product");
    }
  };

  const handleReset = () => {
    reset(product);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      {notification && (
        <div
          className={`p-4 mb-4 text-white ${
            notification.includes("successfully")
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {notification}
        </div>
      )}
      {product && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              id="title"
              defaultValue={product.title}
              {...register("title")}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
                errors.title ? "border-red-500" : ""
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              id="price"
              type="number"
              defaultValue={product.price}
              {...register("price")}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              id="description"
              defaultValue={product.description}
              {...register("description")}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              id="category"
              defaultValue={product.category}
              {...register("category")}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
                errors.category ? "border-red-500" : ""
              }`}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images</label>
            {product.images.map((image, index) => (
              <input
                key={index}
                defaultValue={image}
                {...register(`images[${index}]`)}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
                  errors.images && errors.images[index] ? "border-red-500" : ""
                }`}
              />
            ))}
            {errors.images && (
              <p className="text-red-500 text-sm">{errors.images.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mr-2"
          >
            Update Product
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out ml-2"
          >
            Reset
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProductForm;
