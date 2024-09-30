import { dollar } from "@/config/Currency";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import {
  category,
  listDataTour,
  sorting,
  tourContent,
} from "@/libs/Content/Tour";
import Image from "next/image";
import { GrMap } from "react-icons/gr";
import { IoIosRadioButtonOff } from "react-icons/io";

const TourPage = () => {
  const { isMobile } = Mobile();

  return (
    <div className={` ${fonts.className}`}>
      {isMobile ? (
        // Mobile device
        <div></div>
      ) : (
        // Desktop and Tablet Device
        <div className="mt-20 md:px-8 lg:px-24">
          <div className={"space-y-3"}>
            <h1 className="text-2xl font-semibold">{tourContent.heading}</h1>
            <p className="text-sm text-gray-500 md:w-[35%] lg:w-[25%]">
              {tourContent.description}
            </p>
          </div>
          <div className="mt-10 flex lg:space-x-10">
            <div className="block">
              {/* Filter, Category, dan Sorting */}
              <div className="sticky top-10 space-y-5">
                {/* Search Tour */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Search Tour</h2>
                  <div className="mt-4 flex items-center space-x-3 rounded-md bg-gray-100 p-3">
                    <GrMap className="text-[18px] text-gray-400" />
                    <input
                      placeholder="Search tour"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
                    />
                  </div>
                </div>
                {/* Category */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Category</h2>
                  <div className="mt-5 space-y-2">
                    {category.map((list, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <IoIosRadioButtonOff className="text-2xl text-gray-400" />
                        <p className="text-sm text-gray-400">{list}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Sorting */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Sorting</h2>
                  <div className="mt-5 space-y-2">
                    {sorting.map((list, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <IoIosRadioButtonOff className="text-2xl text-gray-400" />
                        <p className="text-sm text-gray-400">{list}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8">
              {listDataTour.map((list, idx) => (
                <div key={idx} className="space-y-2">
                  <Image
                    src={require(`@/assets/images/Homepage/${list.thumbnail}`)}
                    alt="image-tour"
                    className="rounded-md"
                  />
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
        </div>
      )}
    </div>
  );
};

export default TourPage;
