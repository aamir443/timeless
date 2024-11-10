"use client";
import { useCart } from "@/context/CartContext";
import React, { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handlePayNow = () => {
    setIsModalOpen(true);
  };

  // Close modal and complete "payment"
  const handleCompletePayment = () => {
    alert("Payment successful! Thank you for your purchase.");
    setIsModalOpen(false);
    // Reset the cart or proceed with further actions as needed
  };

  return (
    <div className="h-auto w-auto bg-gray-200 flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="w-[80vw] max-w-8xl bg-white p-6 rounded-lg shadow-lg">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-gray-700 font-semibold">
                        Price: ₹{item.price} x {item.quantity} = ₹
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold text-right mt-6">
            Total: ₹{getTotalPrice()}
          </div>
          <button
            onClick={handlePayNow}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Pay Now
          </button>
        </div>
      )}

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] max-w-md">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <p className="text-gray-600 mb-4">Total: ₹{getTotalPrice()}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCompletePayment();
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Card Number"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Complete Payment
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 mt-2 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
