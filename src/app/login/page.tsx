"use client";
import React from "react";
import "./loginpage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";

type Props = {};

const LoginPage = (props: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <StarryBackground />
      <Navbar />
      <div className="flex items-center justify-center ">
        <div className="bg-white mt-28 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
            >
              Log In
            </button>
            <p className="text-center mt-4">
              New here?{" "}
              <a href="#" className="text-[#2b2b2b] hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
