import React from "react";
import "./roomcomponent.css";

type Props = {
  name: string;
  type: string;
};

const RoomComponent = (props: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-start text-white bg-gray-600 rounded-md transition-all hover:scale-105 cursor-pointer w-52 mt-4 p-4"
      style={{ fontFamily: "Poppins" }}
    >
      <h3>{props.name}</h3>
      <h3>Type: {props.type}</h3>
    </div>
  );
};

export default RoomComponent;
