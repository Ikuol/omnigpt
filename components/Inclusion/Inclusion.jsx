'use client';

import { AiOutlineCheck } from "react-icons/ai";

const Inclusion = ({ text }) => {
  return (
    <div className="flex flex-row items-baseline gap-x-4">
        <span className="mt-2">
            <AiOutlineCheck />
        </span>
        <p className="text-xl font-medium -mt-2">
            {text}
        </p>
    </div>
  )
}

export default Inclusion