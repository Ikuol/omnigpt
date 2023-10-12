"use client";

import { integrations } from "@/constants";
import DisplayIntegration from "@/components/DisplayIntegration/DisplayIntegration";

const Integrations = () => {
  return (
    <section className="w-full py-12">
      <div
        className="w-full flex flex-col
        gap-y-10 px-12"
      >
        <h2 className="text-white text-6xl font-semibold">
          <span className="text-green">Integrations </span>
          to Boost
          <br />
          Your Workflow
        </h2>
        <div className="grid grid-cols-3 gap-y-10 gap-x-12 mx-auto">
          {integrations.map((integration) => (
            <DisplayIntegration key={integration.id} {...integration} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
