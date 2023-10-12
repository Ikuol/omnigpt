"use client";

const DisplayText = ({ title }) => {
  return (
    <div
      className={` border-b
    w-[480px] cursor-pointer items-center justify-center`}
    >
      <h1
        className="text-white font-bold
        text-[30px] mb-2 mt-2"
      >
        {title}
      </h1>
    </div>
  );
};

export default DisplayText;
