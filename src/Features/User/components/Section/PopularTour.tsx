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
        <></>
      ) : (
        // Desktop & Tablet Device
        <div>
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">{popularTour.heading}</h1>
              <p className="text-sm text-gray-400 w-[60%]">
                {popularTour.description}
              </p>
            </div>
            {/* Button Next Preview Popular Tour */}
            <div className="flex space-x-3 w-auto">
                <button className="text-gray-400 bg-gray-200 p-3 rounded-full">
                    <LuChevronLeft className="text-xl "/>
                </button>
                <button className="text-white bg-[#FF8500] p-3 rounded-full">
                    <LuChevronLeft className="text-xl rotate-180 "/>
                </button>
            </div>
          </div>
          {/* List Popular Tour */}
          <div className="mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-3">
            {listDataTour.slice(0, 4).map((list, idx) => (
              <div key={idx} className="space-y-2">
                {/* Thumbnail tour with rating  */}
                <div className="relative">
                  <Image
                    src={require(`@/assets/images/Homepage/${list.thumbnail}`)}
                    alt="list-tour"
                    className="rounded-md"
                  />
                  <div className="bg-white absolute px-4 py-2 top-3 right-3 rounded-md flex space-x-2">
                    <FaStar className="text-lg text-[#ff8500]"/>
                    <p className="text-sm text-medium text-gray-500">{list.rating}</p>
                  </div>
                </div>
                {/* Name tour, location, and price */}
                <div className="flex md:flex-col md:space-y-2 lg:flex-row lg:justify-between">
                    <div className="space-y-1">
                      <p className="text-[13px] font-medium">
                        {list.name_tour}
                      </p>
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
