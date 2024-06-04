// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";

// const schema = yup.object().shape({
//   title: yup.string().required("Product name is required"),
//   price: yup
//     .number()
//     .required("Price is required")
//     .typeError("Price must be a number")
//     .positive("Price must be positive")
//     .min(0, "Price must be greater than or equal to 0"),
//   description: yup.string().required("Description is required"),
//   category: yup.string().required("Category is required"),
//   images: yup.array().min(1, "At least one image is required"),
// });

// const EditProductForm = (productId, onSave) => {
//   const [notification, setNotification] = useState("");
//   const [images, setImages] = useState([]);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/products/${productId}`
//         );
//         const product = response.data;
//         setValue("title", product.title);
//         setValue("price", product.price);
//         setValue("description", product.description);
//         setValue("category", product.category);
//         setImages(product.images);
//       } catch (error) {
//         console.error("There was an error fetching the product!", error);
//       }
//     };

//     if (productId) {
//       fetchProduct();
//     }
//   }, [productId, setValue]);

//   const onSubmit = async (data) => {
//     const updatedProduct = {
//       ...data,
//       images,
//     };

//     try {
//       await axios.put(
//         `http://localhost:3000/products/${productId}`,
//         updatedProduct
//       );
//       setNotification("Product updated successfully!");
//       reset();
//       onSave();
//       setTimeout(() => {
//         setNotification("");
//       }, 3000);
//     } catch (error) {
//       console.error("There was an error updating the product!", error);
//       setNotification("Failed to update product");
//     }
//   };

//   const handleFileInputChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files.map((file) => URL.createObjectURL(file)));
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
//       {notification && (
//         <div
//           className={`p-4 mb-4 text-white ${
//             notification.includes("successfully")
//               ? "bg-green-500"
//               : "bg-red-500"
//           }`}
//         >
//           {notification}
//         </div>
//       )}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Product Name</label>
//           <input
//             id="title"
//             {...register("title")}
//             className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
//               errors.title ? "border-red-500" : ""
//             }`}
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm">{errors.title.message}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Price</label>
//           <input
//             id="price"
//             type="number"
//             {...register("price")}
//             className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
//               errors.price ? "border-red-500" : ""
//             }`}
//           />
//           {errors.price && (
//             <p className="text-red-500 text-sm">{errors.price.message}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             id="description"
//             {...register("description")}
//             className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
//               errors.description ? "border-red-500" : ""
//             }`}
//           />
//           {errors.description && (
//             <p className="text-red-500 text-sm">{errors.description.message}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Category</label>
//           <select
//             id="category"
//             {...register("category")}
//             className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
//               errors.category ? "border-red-500" : ""
//             }`}
//           >
//             <option value="" disabled>
//               Select a category
//             </option>
//             <option value="T-shirt">T-shirt</option>
//             <option value="Shoes">Shoes</option>
//             <option value="TrackPants">TrackPants</option>
//           </select>
//           {errors.category && (
//             <p className="text-red-500 text-sm">{errors.category.message}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Images (up to 5 images)</label>
//           <input
//             id="images"
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleFileInputChange}
//             className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
//               errors.images ? "border-red-500" : ""
//             }`}
//           />
//           {errors.images && (
//             <p className="text-red-500 text-sm">{errors.images.message}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
//         >
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProductForm;
