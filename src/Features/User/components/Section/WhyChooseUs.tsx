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
      className={` ${fonts.className} ${!isMobile && "md:mx-8 lg:mx-24 mt-44"}`}
    >
      {isMobile ? (
        // Mobile Device
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="flex md:space-x-8 lg:space-x-20">
          <Image src={BgWhyChooseUs} alt="bg-whychooseus" className="md:w-[45%] lg:w-auto"/>
          <div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#FF8500]">
                {aboutData.subHeading}
              </p>
              <h1 className="text-4xl font-bold leading-snug">
                {aboutData.heading}
              </h1>
              <p className="text-sm text-gray-400 md:w-[90%]">{aboutData.description}</p>
            </div>
            <div className="space-y-3 mt-10">
                {
                    aboutData.benefit.map((list, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                            <FaCircleCheck className="text-green-500 text-lg"/>
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold">{list.name_benefit}</h2>
                                <p className="text-sm text-gray-400 w-[80%]">{list.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;
