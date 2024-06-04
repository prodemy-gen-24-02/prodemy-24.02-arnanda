// import { useEffect } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";

// const schema = yup.object().shape({
//   title: yup.string().required("Title is required"),
//   price: yup.number().required("Price is required").positive().integer(),
//   description: yup.string().required("Description is required"),
//   category: yup.string().required("Category is required"),
//   images: yup
//     .array()
//     .of(
//       yup.string().url("Must be a valid URL").required("Image URL is required")
//     ),
// });

// const ProductForm = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       images: [""], // Start with one image input field
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "images",
//   });

//   useEffect(() => {
//     if (id) {
//       // Fetch the product details for editing
//       axios
//         .get(`http://localhost:3000/products/${id}`)
//         .then((response) => {
//           const product = response.data;
//           // Set form values
//           setValue("title", product.title);
//           setValue("price", product.price);
//           setValue("description", product.description);
//           setValue("category", product.category);
//           setValue("images", product.images || [""]);
//         })
//         .catch((error) => {
//           console.error("There was an error fetching the product!", error);
//         });
//     }
//   }, [id, setValue]);

//   const onSubmit = async (data) => {
//     if (id) {
//       // Update the product
//       await axios.put(`http://localhost:3000/products/${id}`, data);
//     } else {
//       // Create a new product
//       await axios.post("http://localhost:3000/products", data);
//     }
//     history.push("/"); // Redirect to product list after submission
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">
//         {id ? "Edit Product" : "Add Product"}
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block mb-2">Title</label>
//           <input
//             {...register("title")}
//             className="border border-gray-300 p-2 w-full"
//             placeholder="Title"
//           />
//           <p className="text-red-500">{errors.title?.message}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Price</label>
//           <input
//             {...register("price")}
//             type="number"
//             className="border border-gray-300 p-2 w-full"
//             placeholder="Price"
//           />
//           <p className="text-red-500">{errors.price?.message}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Description</label>
//           <textarea
//             {...register("description")}
//             className="border border-gray-300 p-2 w-full"
//             placeholder="Description"
//           />
//           <p className="text-red-500">{errors.description?.message}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Category</label>
//           <input
//             {...register("category")}
//             className="border border-gray-300 p-2 w-full"
//             placeholder="Category"
//           />
//           <p className="text-red-500">{errors.category?.message}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Images</label>
//           {fields.map((field, index) => (
//             <div key={field.id} className="flex mb-2">
//               <input
//                 {...register(`images.${index}`)}
//                 className="border border-gray-300 p-2 w-full"
//                 placeholder="Image URL"
//               />
//               <button
//                 type="button"
//                 onClick={() => remove(index)}
//                 className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => append("")}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Add Image
//           </button>
//           <p className="text-red-500">{errors.images?.message}</p>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {id ? "Update Product" : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

// // import ProductForm from "./ProductForm";

// // const AddProduct = () => {
// //   return (
// //     <div>
// //       <h1>Add Product</h1>
// //       <ProductForm
// //         onSave={(product) => {
// //           fetch("http://localhost:3000/products", {
// //             method: "POST",
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify(product),
// //           })
// //             .then((response) => response.json())
// //             .then((data) => console.log("Product added:", data));
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default AddProduct;
