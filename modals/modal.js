import Option from "@/components/Option/Option";

import { freeOptions, paidOptions } from "@/constants";

import { AiOutlineCloseCircle } from "react-icons/ai";

export const CheckoutModal = ({ open, handleCheckout, closeModal }) => {
  return open ? (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full
      p-4 overflow-x-hidden justify-center h-full flex items-center
      overflow-y-auto md:inset-0 bg-gray-900/60"
    >
      <div
        className="flex flex-col justify-center h-auto text-white
        items-center border w-[600px] mx-auto"
      >
        <div
          className="flex border-b w-full h-[45px] items-center
          px-4 justify-between"
        >
          <p>Your plan</p>
          <span onClick={closeModal} className="cursor-pointer">
            <AiOutlineCloseCircle size="1.3rem" />
          </span>
        </div>
        <div className="flex p-4">
          <div className="flex flex-col gap-y-4 border-r px-2">
            <h1 className="font-extrabold">Free plan</h1>
            <button
              className="text-black rounded-[5px] bg-gray-400
              font-bold h-[40px] cursor-not-allowed w-full"
            >
              Your current plan
            </button>
            {freeOptions.map((freeOption) => (
              <Option key={freeOption.id} color="#fff" {...freeOption} />
            ))}
          </div>
          <div className="flex flex-col gap-y-4 px-2">
            <h1 className="font-extrabold">OmniGPT Plus (USD $20/mo)</h1>
            <button
              onClick={() => {
                handleCheckout({
                  lineItems: [
                    {
                      price: "price_1NOk0tFSkmsv69qzSDc3MZpH",
                      quantity: 1,
                    },
                  ],
                });
              }}
              className="text-white rounded-md bg-green w-full
          font-bold h-[40px]"
            >
              Upgrade plan
            </button>
            {paidOptions.map((paidOption) => (
              <Option key={paidOption.id} color="#1FC77E" {...paidOption} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
