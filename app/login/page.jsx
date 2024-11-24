"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sign in using email and password (custom credentials)
    await signIn("credentials", { email, password });
  };

  const handleGoogleSignIn = async () => {
    // Sign in using Google
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {/* Login Button */}
          <button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* Sign in with Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-500 text-white py-3 w-full rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
        >
          <img
            src="/google-icon.svg" // Add a Google icon to your public folder
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-red-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
