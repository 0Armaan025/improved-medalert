"use client";
import React from "react";
import "./dashboardpage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";
import RoomComponent from "@/components/room/RoomComponent";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <div className="flex">
        <aside className="w-64 bg-gray-800 h-[89vh] text-white p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Hospital Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Send Alerts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Patients Tracker
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Patients Entry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  Manage Rooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-green-400 hover:bg-red-600 rounded"
                >
                  Log out
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
            <div className="flex flex-row justify-start items-start mb-4">
              <p className="text-gray-200">Welcome to your dashboard!</p>
              <p className="text-gray-300 ml-2 underline-offset-1 underline cursor-pointer">
                Add a room...
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <RoomComponent name="Name of the room" type="Type of the room" />
              <RoomComponent name="Name of the room" type="Type of the room" />
              <RoomComponent name="Name of the room" type="Type of the room" />
              <RoomComponent name="Name of the room" type="Type of the room" />
              {/* Add more RoomComponent instances as needed */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
