import React from "react";
import { FaCheck } from "react-icons/fa";

const Verified = () => {
  return (
    <div>
      <div className="bg-green-600 w-max p-5 rounded-full">
        <FaCheck size={60} color="#70b510" />
      </div>
      <p className="font-bold text-3xl text-green-700">Verified</p>
    </div>
  );
};

export default Verified;
