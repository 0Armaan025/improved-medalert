"use client";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./homepage.css";
import "./background.css";
import StarryBackground from "./StarryBackground";
import Footer from "@/components/footer/Footer";

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
          <h3
            style={{
              fontFamily: "poppins, sans-serif",
              fontSize: "34px",
              marginTop: "15px",
              color: "#d4d4d4",
            }}
          >
            Hospital Management is Complicated
          </h3>
          <div className="problemsColumn">
            <div className="problemRow">
              <div className="problemItem">
                <h5>How do we track pateints?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15090/15090955.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>How do we contact emergency?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3063/3063181.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>How do we reserve rooms?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3974/3974807.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>What if there are no more rooms?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9733/9733672.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
            </div>
            {/* <br /> */}
            <div className="problemRow">
              <div className="problemItem">
                <h5>How do we store their data?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10226/10226140.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>How can they check the records?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2376/2376100.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>Do they manually send notifs?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/272/272340.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
              <div className="problemItem">
                <h5>How can we store and use real data?</h5>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8251/8251833.png"
                  style={{ width: "50px", marginTop: "10px" }}
                />
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="" style={{ marginTop: "20rem" }}></div>
      <Footer />
    </>
  );
};

export default HomePage;
