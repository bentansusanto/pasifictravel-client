import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DetailReq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-2">
      <div className="rounded-md bg-gray-50 p-5">
        {" "}
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={handleToggle}
        >
          <h2 className="text-sm font-semibold">Pasport requirements</h2>
          <span
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <FaChevronDown />
          </span>
        </div>
        {isOpen && (
          <div className="mt-2">
            <ol className="mx-2.5 list-decimal text-sm text-gray-400">
              <li>
                Paspor dengan masa berlaku min. 6 bln terakhir + Paspor Lama
                (jika ada paspor lama sebelumnya).
              </li>
              <li>
                Paspor dengan masa berlaku min. 6 bln terakhir + Paspor Lama
                (jika ada paspor lama sebelumnya).
              </li>
              <li>
                Paspor dengan masa berlaku min. 6 bln terakhir + Paspor Lama
                (jika ada paspor lama sebelumnya).
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailReq;
