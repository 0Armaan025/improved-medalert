"use client";
import React from "react";
import "./dashboardpage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <div className="flex min-h-screen ">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1 p-6">
          <header className="bg-[#9e9e9e] rounded-md shadow-md p-4 mb-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </header>

          <main>
            <p className="text-gray-700">Welcome to your dashboard!</p>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
