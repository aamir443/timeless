"use client";
import { signOut, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut(); // Logs out the user
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Welcome Back, {session?.user?.name || "User"}!
        </h1>
        <p className="text-gray-600 mb-6">
          You are logged in as <span className="font-medium">{session?.user?.email}</span>.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 w-full rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default page;
