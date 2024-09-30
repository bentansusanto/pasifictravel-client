import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { testimoniData } from "@/libs/Content/Homepage";
import Image from "next/image";
import Quotes from "@/assets/images/Homepage/quotes.png";

const TestimoniSection = () => {
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
            <p className="text-sm font-semibold text-[#FF8500]">
              {testimoniData.subHeading}
            </p>
            <h1 className="text-xl font-bold leading-snug">
              {testimoniData.heading}
            </h1>
          </div>

          {/* Testimoni for Mobile with Horizontal Scroll */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {testimoniData.testimoni.map((list, idx) => (
              <div key={idx} className="w-[90%] flex-shrink-0 space-y-2 p-3">
                <div className="space-y-5 rounded-md bg-white p-5">
                  <p className="text-[15px] font-semibold">{list.message}</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={require(`@/assets/images/Homepage/${list.picture}`)}
                      alt="picture-testimoni"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">{list.name}</p>
                      <p className="text-sm text-gray-400">{list.status}</p>
                    </div>
                  </div>
                </div>
                <Image
                  src={Quotes}
                  alt="quotes-testimoni"
                  className="absolute -top-6 right-2 w-[20%]"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop & Tablet Device
        <div>
          {/* Heading with button cta to booking tour */}
          <div className="flex items-end justify-between">
            <div className="space-y-2 md:w-[80%] lg:w-[50%]">
              <p className="text-sm font-semibold text-[#FF8500]">
                {testimoniData.subHeading}
              </p>
              <h1 className="w-[70%] text-4xl font-bold leading-snug">
                {testimoniData.heading}
              </h1>
            </div>
            <div>
              <button className="rounded-md bg-[#FF8500] font-semibold text-white">
                Book Now
              </button>
            </div>
          </div>

          {/* Testimoni */}
          <div className="mt-16 flex space-x-3">
            {testimoniData.testimoni.map((list, idx) => (
              <div key={idx} className="relative">
                <div className="space-y-5 rounded-md bg-white p-5">
                  <p className="text-[15px] font-semibold">{list.message}</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={require(`@/assets/images/Homepage/${list.picture}`)}
                      alt="picture-testimoni"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">{list.name}</p>
                      <p className="text-sm text-gray-400">{list.status}</p>
                    </div>
                  </div>
                </div>
                <Image
                  src={Quotes}
                  alt="quotes-testimoni"
                  className="absolute -top-12 right-0 w-[30%]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimoniSection;
