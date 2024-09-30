import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { popularTour } from "@/libs/Content/Homepage";
import { listDataTour } from "@/libs/Content/Tour";
import Image from "next/image";
import { LuChevronLeft } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { GrMap } from "react-icons/gr";
import { dollar } from "@/config/Currency";

const PopularTour = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-44 md:mx-8 lg:mx-24"}`}
    >
      {isMobile ? (
        // Mobile Device
        <div className="px-4 py-16">
          {/* Heading */}
          <div className="mb-4 space-y-2 text-left">
            <h1 className="text-xl font-semibold">{popularTour.heading}</h1>
            <p className="text-sm text-gray-400">{popularTour.description}</p>
          </div>

          {/* List Popular Tour for Mobile with Horizontal Scroll */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {listDataTour.slice(0, 4).map((list, idx) => (
              <div key={idx} className="w-[70%] flex-shrink-0 space-y-2">
                {/* Thumbnail tour with rating  */}
                <div className="relative">
                  <Image
                    src={require(`@/assets/images/Homepage/${list.thumbnail}`)}
                    alt="list-tour"
                    className="rounded-md"
                  />
                  <div className="absolute right-3 top-3 flex space-x-2 rounded-md bg-white px-4 py-2">
                    <FaStar className="text-lg text-[#ff8500]" />
                    <p className="text-medium text-sm text-gray-500">
                      {list.rating}
                    </p>
                  </div>
                </div>
                {/* Name tour, location, and price */}
                <div className="flex flex-col space-y-2">
                  <div className="space-y-1">
                    <p className="text-[13px] font-medium">{list.name_tour}</p>
                    <div className="flex items-center space-x-2">
                      <GrMap className="text-sm text-orange-400" />
                      <p className="text-[12px] text-gray-400">
                        {list.location}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[15px] font-semibold">
                      {dollar(list.price)}
                      <span className="text-xs font-normal">/person</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop & Tablet Device
        <div>
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">{popularTour.heading}</h1>
              <p className="w-[60%] text-sm text-gray-400">
                {popularTour.description}
              </p>
            </div>
            {/* Button Next Preview Popular Tour */}
            <div className="flex w-auto space-x-3">
              <button className="rounded-full bg-gray-200 p-3 text-gray-400">
                <LuChevronLeft className="text-xl" />
              </button>
              <button className="rounded-full bg-[#FF8500] p-3 text-white">
                <LuChevronLeft className="rotate-180 text-xl" />
              </button>
            </div>
          </div>
          {/* List Popular Tour */}
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {listDataTour.slice(0, 4).map((list, idx) => (
              <div key={idx} className="space-y-2">
                {/* Thumbnail tour with rating  */}
                <div className="relative">
                  <Image
                    src={require(`@/assets/images/Homepage/${list.thumbnail}`)}
                    alt="list-tour"
                    className="rounded-md"
                  />
                  <div className="absolute right-3 top-3 flex space-x-2 rounded-md bg-white px-4 py-2">
                    <FaStar className="text-lg text-[#ff8500]" />
                    <p className="text-medium text-sm text-gray-500">
                      {list.rating}
                    </p>
                  </div>
                </div>
                {/* Name tour, location, and price */}
                <div className="flex md:flex-col md:space-y-2 lg:flex-row lg:justify-between">
                  <div className="space-y-1">
                    <p className="text-[13px] font-medium">{list.name_tour}</p>
                    <div className="flex items-center space-x-2">
                      <GrMap className="text-sm text-orange-400" />
                      <p className="text-[12px] text-gray-400">
                        {list.location}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="font-semibold md:text-[15px] lg:text-[18px]">
                      {dollar(list.price)}
                      <span className="text-xs font-normal">/person</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularTour;
