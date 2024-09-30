import React from "react";

const PassportCard = () => {
  return (
    <div className="rounded-lg bg-white p-6">
      <h2 className="mb-4 font-semibold sm:text-sm lg:text-base">
        Pasport Biasa Kilat
      </h2>
      <div>
        <h3 className="mb-2 font-medium text-gray-400 sm:text-[11px] lg:text-sm">
          Persyaratan pembuatan pasport
        </h3>
        <ul className="mb-6 sm:text-[11px] lg:text-sm">
          <li className="mb-2 flex items-center">
            <span className="mr-2 text-green-500">✔</span>
            <span className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </li>
          <li className="mb-2 flex items-center">
            <span className="mr-2 text-green-500">✔</span>
            <span className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </li>
          <li className="mb-2 flex items-center">
            <span className="mr-2 text-green-500">✔</span>
            <span className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </li>
          <li className="mb-2 flex items-center">
            <span className="mr-2 text-green-500">✔</span>
            <span className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <div className="mb-2 flex justify-between sm:text-[11px] lg:text-sm">
          <span className="text-gray-400">Person (3 orang)</span>
          <span className="font-semibold">IDR 3.500.000</span>
        </div>
        <div className="mb-2 flex justify-between sm:text-[11px] lg:text-sm">
          <span className="text-gray-400">Tax</span>
          <span className="font-semibold">IDR 12.500</span>
        </div>
        <div className="mb-4 flex justify-between font-semibold sm:text-[11px] lg:text-sm">
          <span className="text-gray-400">Total</span>
          <span className="font-semibold">IDR 3.585.000</span>
        </div>
        <button className="w-full rounded bg-orange-500 py-2 text-white transition-colors hover:bg-orange-600 sm:text-[11px] lg:text-sm">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PassportCard;
