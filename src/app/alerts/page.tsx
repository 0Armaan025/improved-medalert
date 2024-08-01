"use client";
import React from "react";
import "./alertspage.css";
import Navbar from "@/components/navbar/Navbar";
import StarryBackground from "@/home/StarryBackground";
import NotificationComponent from "@/components/notification/NotificationComponent";

type Props = {};

const AlertsPage = (props: Props) => {
  const alerts = [
    {
      type: "incoming",
      message: "An incoming patient is arriving soon.",
      timestamp: "2024-08-01 10:00",
      title: "Incoming Patient",
    },
    {
      type: "predicted",
      message: "Predicted issue with patient #1234.",
      timestamp: "2024-08-01 11:00",
      title: "Predicted Issue",
    },
    {
      type: "critical",
      message: "Critical condition for patient #5678.",
      timestamp: "2024-08-01 12:00",
      title: "Critical Condition",
    },
    
  ];

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
            <h1 className="text-2xl font-semibold">Notifications</h1>
          </header>

          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alerts.map((alert, index) => (
                <NotificationComponent key={index} alert={alert} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AlertsPage;
