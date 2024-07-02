import { Mobile } from "@/config/MediaQuery";
import Image from "next/image";
import { fonts } from "@/config/Themes";
import { GrMap } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";

export default function HelpYouProces() {
  const { isMobile } = Mobile();

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        // help you process
        <div className="">
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <Image
              src={require("@/assets/images/Document_and_Visa/book-pasp.png")}
              alt="book-pasport"
              className="rounded-md "
            />
            <div className="absolute inset-0 content-center px-5 text-center">
              <h1 className="font-semibold text-white md:text-[26px] lg:text-[52px]">
                We Help You Process Your Visa Quickly, Easily and Reliably
              </h1>
              <div className="mx-5 md:mx-[7rem] lg:mx-40">
                <div className="mt-12 flex w-auto flex-col items-end space-y-4 rounded-md bg-white p-4 md:flex-row md:space-x-5 md:space-y-0">
                  <div className="space-y-2 md:w-auto lg:w-full">
                    <p className="text-left text-sm text-gray-400">
                      Where you go?
                    </p>
                    <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-2 py-2.5 md:w-28 lg:w-full">
                      <GrMap className=" md:text-xs lg:text-sm" />
                      <input
                        placeholder="Location"
                        className="bg-transparent outline-none placeholder:text-sm md:text-xs lg:text-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <p className="text-left text-gray-400 md:text-xs lg:text-sm">
                      Select Document
                    </p>
                    <div className="flex items-center space-x-2 rounded-md bg-gray-100  py-2.5 md:w-28 lg:w-full">
                      <GrMap className=" md:text-xs lg:text-sm" />
                      <input
                        placeholder="Visa"
                        className="bg-transparent outline-none md:text-xs placeholder:md:text-sm lg:text-sm placeholder:lg:text-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="flex items-center justify-center space-x-2 rounded-md bg-[#FD8400] py-2.5 text-center font-semibold text-white md:w-28 lg:w-full">
                      <LuSearch className="md:text-xs lg:text-lg" />
                      <p className="md:text-xs lg:text-sm">Search</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
