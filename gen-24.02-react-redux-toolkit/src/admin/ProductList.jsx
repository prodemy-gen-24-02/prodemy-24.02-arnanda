import { Link } from "react-router-dom";
import useSWR, { mutate } from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const ProductList = () => {
  const { data: products, error } = useSWR(
    "http://localhost:3000/products",
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      mutate("http://localhost:3000/products");
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  if (error) return <div>Error fetching data</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/admin/dashboard/editproduct/${product.id}`}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
