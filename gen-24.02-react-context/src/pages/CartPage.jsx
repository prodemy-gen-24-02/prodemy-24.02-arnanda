import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
  } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-4xl mt-20 px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 gap-4">
              {cart.map((product) => (
                <div
                  key={`${product.id}-${product.size}`}
                  className="flex items-center border p-4"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-20 h-20 mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-600">Size: {product.size}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="text-red-500"
                        onClick={() =>
                          decreaseQuantity(product.id, product.size)
                        }
                      >
                        -
                      </button>
                      <p className="mx-2">{product.quantity}</p>
                      <button
                        className="text-green-500"
                        onClick={() =>
                          increaseQuantity(product.id, product.size)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Total: ${(product.price * product.quantity).toFixed(2)}
                    </p>
                    <button
                      className="mt-2 text-sm text-red-500 underline"
                      onClick={() => removeFromCart(product.id, product.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold">
                Total Payment: ${calculateTotalPrice().toFixed(2)}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/purchase")}
              >
                Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
