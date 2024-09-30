import { modalProps } from "@/utils/Modal/modalProps";
import { fonts } from "@/config/Themes";
import React from "react";
import Image from "next/image";
import RadioButtonComponent from "./section/RadioButtonComponent";
import DaftarHargaComponent from "./section/DaftarHargaComponent";
import DetailReq from "./section/DetailReq";

const Modal = ({
  isVisible,
  onClose,
  NameCountry,
  NameFlag,
  descWords,
  capital_City,
  id,
}: modalProps) => {
  if (!isVisible) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleButtonClick = () => {
    alert("berhasil");
    onClose();
  };

  return (
    <div
      key={`${id}`}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 ${fonts.className} py-31`}
      onClick={handleOverlayClick}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-sm overflow-hidden rounded-md bg-white p-6"
        onClick={handleModalClick}
      >
        <div className="">
          {/* Picture  */}
          <div className="">
            <Image
              src={require(`@/assets/images/Document_and_Visa/${NameFlag}`)}
              alt={"image"}
              className="h-[210px] w-[405px]"
            />
          </div>
          {/* descripsi */}
          <div className="hide-scrollbar relative my-6 max-h-[33vh] overflow-auto">
            <div className="text-left">
              <div>
                <h4 className="text-lg font-semibold">{NameCountry}</h4>
                <p className="py-1 text-xs text-gray-400">Receive a pasport</p>
              </div>
              <div className="w-[505] py-5 text-justify text-[15px] text-gray-500">
                {descWords}
              </div>
            </div>
            {/* choose category */}
            <div className="pb-2 pt-4 text-left">
              <h4 className="text-15px font-semibold">
                Choose category of visa
              </h4>
              <div className="py-3">
                <RadioButtonComponent />
              </div>
            </div>

            {/* detail harga */}
            <div className="pb-3 pt-1 text-left">
              <DaftarHargaComponent />
            </div>
            {/* Pasport requirements  */}
            <div className="py-2 text-left">
              <DetailReq />
            </div>
          </div>
          {/* button */}
        </div>
        <div className="">
          <button
            className="w-[21rem] max-w-lg rounded bg-orange-500 p-4 text-white"
            onClick={handleButtonClick}
          >
            Apply Passport Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
