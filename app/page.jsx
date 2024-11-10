/* eslint-disable @next/next/no-img-element */
"use client";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Home = () => {
  const images = [
    "/img5.jpg",
    "/img11.jpg",
    "/img15.jpg",
    "/img19.jpg",
    "/img23.jpg",
    "/img27.jpg",
    "/img31.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
    return () => clearInterval(interval);
  }, [images.length]);

  const handleAddToCart = (product) => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="h-auto w-auto bg-gray-200 flex flex-col justify-center items-center py-10">
      {/* Hero Image Section */}
      <div className="bg-black flex mx-auto w-[80vw] h-[70vh] justify-center overflow-hidden">
        <img
          src={images[currentIndex]}
          className="w-full h-full object-cover"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Card Section */}
      <div className="w-[80vw] max-w-8xl mt-8 flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-5 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">Price: ₹{product.price}</p>
            <p className="text-gray-600 mb-4 text-center">
              {product.description}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
