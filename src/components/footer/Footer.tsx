import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-100 bg-opacity-10 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 MedAlert. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
