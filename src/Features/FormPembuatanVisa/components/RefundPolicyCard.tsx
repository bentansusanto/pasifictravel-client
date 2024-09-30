import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";

const RefundPolicyCard: React.FC = () => {
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-lg border bg-white p-4">
      <div className="flex items-center space-x-2">
        <PiNotepadBold />
        <h2 className="font-semibold sm:text-sm lg:text-base">
          Kebijakan Refund
        </h2>
      </div>

      <div className="mb-4 rounded bg-gray-100 p-3 text-gray-700">
        <p className="text-gray-400 sm:text-[9px] lg:text-xs">
          Kamu mendapatkan kamar dengan harga terbaik dari pilihan ini!
        </p>
      </div>
      <ul>
        <li className="mb-2 flex items-center">
          <FaTimesCircle className="mr-2 h-3 w-3 text-red-500" />
          <p className="text-sm text-gray-400 sm:text-[11px] lg:text-sm">
            Pemesanan ini tidak bisa di-refund.
          </p>
        </li>
        <li className="flex items-start">
          <FaTimesCircle className="mr-2 h-3 w-3 text-red-500" />
          <p className="text-sm text-gray-400 sm:text-[11px] lg:text-sm">
            Non-reschedulable
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicyCard;
