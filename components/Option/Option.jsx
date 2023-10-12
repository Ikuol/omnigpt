"use client";

import { BsCheck2Circle } from "react-icons/bs";

const Option = ({ color, text }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <BsCheck2Circle size="1rem" color={color} />
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Option;
