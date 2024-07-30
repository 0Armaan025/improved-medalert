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
  const [showHospitalCode, setShowHospitalCode] = useState(false);
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");

  const generateHospitalCode = () => {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
    setShowHospitalCode(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedUp(true);
  };

  const handleGoAhead = () => {
    if (userType === "hospital") {
      setHospitalCode(generateHospitalCode());
    }
    setShowHospitalCode(true);
  };

  return (
    <>
      <Navbar />
      <StarryBackground />
      <div className="">
        <div className="absolute inset-0 flex items-center justify-center min-h-screen font-poppins z-10">
          <div className="bg-white mt-20 mb-4 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Hey, Hello 👋
            </h1>
            <p className="text-center mb-8">
              Enter the information you want to enter
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isSignedUp && (
                <>
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
                    <a href="#" className="text-[#2b2b2b] hover:underline">
                      Log In
                    </a>
                  </p>
                </>
              )}
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
              <>
                <div className="mt-4">
                  <div>
                    <label className="block text-gray-700">Hospital Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
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
                      value={hospitalAddress}
                      onChange={(e) => setHospitalAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  className="mt-4 w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
                  onClick={handleGoAhead}
                >
                  Get Started
                </button>
              </>
            )}

            {isSignedUp && showHospitalCode && userType === "hospital" && (
              <div className="mt-4">
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
                <button
                  className="mt-4 w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
                  onClick={handleGoAhead}
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
