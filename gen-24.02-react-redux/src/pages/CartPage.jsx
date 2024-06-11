import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/action/checkoutAction";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.checkout.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-4xl mt-20 px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center border-b p-4 bg-gray-200 font-semibold">
                <div className="w-1/4 text-center text-lg">Product Name</div>
                <div className="w-1/4 text-center text-lg">Price</div>
                <div className="w-1/4 text-center text-lg">Size</div>
                <div className="w-1/4 text-center text-lg">Quantity</div>
                <div className="w-1/4 text-center text-lg">Total</div>
                <div className="w-1/4 text-center text-lg">Action</div>
              </div>
              {cart.map((product) => (
                <div
                  key={`${product.id}-${product.size}`}
                  className="flex items-center border-b p-4 bg-white"
                >
                  <div className="w-1/4 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-16 h-16 mr-4"
                    />
                    <span className="text-xl">{product.title}</span>
                  </div>
                  <div className="w-1/4 flex items-center justify-center text-xl">
                    ${product.price}
                  </div>
                  <div className="w-1/4 flex items-center justify-center text-xl">
                    {product.size}
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <div className="flex items-center">
                      <button
                        className="text-red-500 bg-transparent border-none text-xl"
                        onClick={() =>
                          dispatch(decreaseQuantity(product.id, product.size))
                        }
                      >
                        -
                      </button>
                      <p className="mx-2 text-xl">{product.quantity}</p>
                      <button
                        className="text-green-500 bg-transparent border-none text-xl"
                        onClick={() =>
                          dispatch(increaseQuantity(product.id, product.size))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 flex items-center justify-center text-xl">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() =>
                        dispatch(removeFromCart(product.id, product.size))
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-2xl font-semibold">
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
