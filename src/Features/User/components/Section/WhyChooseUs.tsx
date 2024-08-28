import BgWhyChooseUs from "@/assets/images/Homepage/bg-aboutsection-homepage.svg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { whyChooseUsData as aboutData } from "@/libs/Content/Homepage";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={` ${fonts.className} ${!isMobile && "mt-44 md:mx-8 lg:mx-24"}`}
    >
      {isMobile ? (
        // Mobile Device
        <div className="space-y-6 p-4 py-20">
          {/* Image section */}
          <div className="flex justify-center">
            <div className="flex justify-center py-8">
              <Image
                src={BgWhyChooseUs}
                alt="bg-whychooseus"
                className="w-[75%]"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="text-left">
            <p className="text-sm font-semibold text-[#FF8500]">
              {aboutData.subHeading}
            </p>
            <h1 className="py-3 text-2xl font-bold leading-snug">
              {aboutData.heading}
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              {aboutData.description}
            </p>
          </div>

          {/* Benefits List */}
          <div className="mt-6 space-y-3">
            {aboutData.benefit.map((list, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <FaCircleCheck className="text-lg text-green-500" />
                <div>
                  <h2 className="text-sm font-semibold">{list.name_benefit}</h2>
                  <p className="text-sm text-gray-400">{list.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop & Tablet Device
        <div className="flex md:space-x-8 lg:space-x-20">
          <Image
            src={BgWhyChooseUs}
            alt="bg-whychooseus"
            className="md:w-[45%] lg:w-auto"
          />
          <div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#FF8500]">
                {aboutData.subHeading}
              </p>
              <h1 className="text-4xl font-bold leading-snug">
                {aboutData.heading}
              </h1>
              <p className="text-sm text-gray-400 md:w-[90%]">
                {aboutData.description}
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {aboutData.benefit.map((list, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <FaCircleCheck className="text-lg text-green-500" />
                  <div className="space-y-2">
                    <h2 className="text-sm font-semibold">
                      {list.name_benefit}
                    </h2>
                    <p className="w-[80%] text-sm text-gray-400">{list.desc}</p>
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

export default WhyChooseUs;
