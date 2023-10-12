import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-center relative
        sm:px-[7.5rem] items-center"
    >
      {children}
    </div>
  );
};

export default Card;
