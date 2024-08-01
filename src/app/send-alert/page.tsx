"use client";
import React, { useState } from "react";
import "./sendalertpage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";

type Props = {};

const SendAlertPage = (props: Props) => {
  const [alertTitle, setAlertTitle] = useState("");
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");

  const handleSendAlert = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the send alert action here
    console.log("Alert sent:", { alertTitle, alertType, message });
  };

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

        <div className="flex-1 p-6 ">
          <header className="bg-[#9e9e9e] rounded-md shadow-md p-4 mb-4">
            <h1 className="text-2xl font-semibold">Send Alert</h1>
          </header>

          <main>
            <form onSubmit={handleSendAlert} className="space-y-4 mx-40">
              <div>
                <label className="block text-gray-200">Alert Title</label>
                <input
                  type="text"
                  value={alertTitle}
                  onChange={(e) => setAlertTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 h-10"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-200">Alert Type</label>
                <select
                  value={alertType}
                  onChange={(e) => setAlertType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="incoming">Incoming</option>
                  <option value="critical">Critical</option>
                  <option value="predicted">Predicted</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-200">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
              >
                Send Alert
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default SendAlertPage;
