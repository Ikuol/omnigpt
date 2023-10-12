"use client";

const DisplayIntegration = ({ title, description, imgUrl }) => {
  return (
    <div
      className="flex flex-col w-[332px] h-full min-h-[170px] bg-white
      p-6 gap-y-3 justify-center rounded-[5px]"
    >
      <div
        className="flex items-center
        gap-x-3"
      >
        <img src={imgUrl} alt="logo-reseau" className="" />
        <p className="text-xl font-medium text-black">{title}</p>
      </div>
      <div className="flex">
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default DisplayIntegration;
