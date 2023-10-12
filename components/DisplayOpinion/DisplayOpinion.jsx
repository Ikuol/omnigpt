"use client";

import { AiFillStar } from "react-icons/ai";

const DisplayOpinion = ({ title, text, imgUrl, name }) => {
  return (
    <div
      className="w-[503px] h-[395px] flex flex-col
      p-12  bg-white rounded-[10px] gap-y-6"
    >
      <div className="flex gap-x-3">
        {[...Array(5)].map((star, index) => {
          return <AiFillStar key={index} className="text-yellow" />;
        })}
      </div>
      <p className="text-[16px] font-semibold text-black">{title}</p>
      <p className="text-[13px] font-normal">{text}</p>
      <div className="flex items-center gap-x-3">
        <span>
          <img src={imgUrl} alt="profil-pic" className="" />
        </span>
        <p className="text-[13px] leading-[22px]">{name}</p>
      </div>
    </div>
  );
};

export default DisplayOpinion;
