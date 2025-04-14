import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import bgImage from "../assets/ambulance-car-design-icon-logo.jpg";

const Start = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo Top Left */}
      <div className="pt-4 pl-4">
        <img className="w-[120px] mb-10" src={logo} alt="Ambulance Logo" />
      </div>

      {/* Overlay for text and button */}
      <div className="bg-white bg-opacity-90 px-6 py-8 text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Get Started with <br className="sm:hidden" />
          Ambulance Booking System
        </h2>

        <Link
          to="/login"
          className="mt-6 inline-block w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
