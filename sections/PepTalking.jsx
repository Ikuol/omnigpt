"use client";

import { opinions } from "@/constants";

import DisplayOpinion from "@/components/DisplayOpinion/DisplayOpinion";

const PepTalking = () => {
  return (
    <section className={`w-full sm:py-16 xs:py-8 py-12 relative`}>
      <div
        className="flex flex-col
        gap-y-16"
      >
        <h2 className="text-white capitalize text-6xl font-semibold">
          see what people
          <br />
          Are <span className="text-green capitalize">saying about us</span>
        </h2>
        <img
          src="/yellowstar.png"
          alt="yellow-star"
          className="absolute right-1/3"
        />
        <img
          src="/pinkstar.png"
          alt="pink-star"
          className="absolute top-36 right-1/4"
        />
        <div className="flex items-center justify-between gap-x-12">
          {opinions.map((opinion) => (
            <DisplayOpinion key={opinion.id} {...opinion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PepTalking;
