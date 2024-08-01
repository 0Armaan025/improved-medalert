"use client";
import React, { useState } from "react";
import "./patientsentrypage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";

type Props = {};

const PatientsEntryPage = (props: Props) => {
  const [patientName, setPatientName] = useState("");
  const [problem, setProblem] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log({ patientName, problem, urgency });
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

        <div className="flex-1 p-6">
          <header className="bg-[#9e9e9e] rounded-md shadow-md p-4 mb-4">
            <h1 className="text-2xl font-semibold">Patients Entry</h1>
          </header>

          <main>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-md max-w-md mx-auto"
            >
              <div className="mb-4">
                <label className="block text-gray-700">Patient Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Problem</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Urgency Level</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="emergency">Emergency</option>
                  <option value="urgent">Urgent</option>
                  <option value="non-urgent">Non-Urgent</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#3c465b] text-white py-2 rounded hover:bg-[#57637f] transition duration-200"
              >
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default PatientsEntryPage;
