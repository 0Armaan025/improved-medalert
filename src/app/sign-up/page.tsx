"use client";
import React, { useState } from "react";
import "./signuppage.css";
import "../../home/background.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";
import Footer from "@/components/footer/Footer";

type Props = {};

const SignUpPage = (props: Props) => {
  const [userType, setUserType] = useState("");
  const [hospitalCode, setHospitalCode] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const generateHospitalCode = () => {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
    if (e.target.value === "hospital") {
      setHospitalCode(generateHospitalCode());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedUp(true);
  };

  return (
    <>
      <Navbar />
      <StarryBackground />
      <br />
      <div className="mt-32">
        <div className="absolute inset-0 flex items-center justify-center min-h-screen font-poppins z-10">
          <div className="bg-white mt-20 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Hey, Hello 👋
            </h1>
            <p className="text-center mb-8">
              Enter the information you want to enter
            </p>
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
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
              >
                Sign Up
              </button>
              <p className="text-center">
                New?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Log In
                </a>
              </p>
            </form>

            {isSignedUp && (
              <div className="mt-8">
                <label className="block text-gray-700">Registering as:</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  onChange={handleUserTypeChange}
                >
                  <option value="">Select</option>
                  <option value="hospital">Hospital</option>
                  <option value="staff">Hospital Staff</option>
                  <option value="individual">Normal Individual</option>
                </select>
              </div>
            )}

            {isSignedUp && userType === "hospital" && (
              <div className="mt-4">
                <div>
                  <label className="block text-gray-700">Hospital Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Hospital Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Hospital Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={hospitalCode}
                    readOnly
                  />
                </div>
              </div>
            )}

            {isSignedUp && userType === "staff" && (
              <div className="mt-4">
                <div>
                  <label className="block text-gray-700">Hospital Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
