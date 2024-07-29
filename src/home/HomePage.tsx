"use client";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./homepage.css";
import "./background.css";
import StarryBackground from "./StarryBackground";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <StarryBackground />
      <div className="middle flex flex-col justify-center items-center">
        <center>
          <h4 className="saveTimeText text-3xl font-semibold text-[white]">
            Save Time and Life using MedAlert
          </h4>{" "}
          <h6 className="subDescText">
            Enhanced Hopsital Management System, AI for room reservation,
            emergency contact system, patient tracker and so much more!
          </h6>
          <input type="button" value="Get Started" className="getStartedBtn" />
          <div className="problemShowingDiv">The Problem</div>
        </center>
      </div>
    </>
  );
};

export default HomePage;
