import IconMap from "@/assets/icon/icon-maps.svg";
import IconPerson from "@/assets/icon/icon-person.svg";
import BgHeroSection from "@/assets/images/Homepage/bg-herosection-homepage.svg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { heroData } from "@/libs/Content/Homepage";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";

const HeroSection = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${fonts.className} ${!isMobile && "md:ml-8 lg:ml-24"}`}>
      {isMobile ? (
        // Mobile Device
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="flex items-center lg:space-x-20 md:space-x-10">
          {/* Content */}
          <div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#FF8500]">
                {heroData.subHeading}
              </p>
              <h1 className="font-bold md:text-4xl md:leading-tight lg:w-auto lg:text-5xl lg:leading-snug">
                {heroData.heading}
              </h1>
              <p className="text-sm text-gray-500 lg:w-[90%]">
                {heroData.description}
              </p>
            </div>
            {/* Form Search tour */}
            <div className="mt-12 flex w-auto items-end rounded-md bg-white p-4 md:flex-col md:justify-normal md:gap-5 lg:flex-row lg:justify-between lg:gap-5">
              <div className="w-full space-y-2">
                <p className="text-sm text-gray-400">Where you go</p>
                <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-2 py-2.5">
                  <Image src={IconMap} alt="icon-maps" />
                  <input
                    placeholder="Location"
                    className="bg-transparent text-sm outline-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="w-full space-y-2">
                <p className="text-sm text-gray-400">Person</p>
                <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-2 py-2.5">
                  <Image src={IconPerson} alt="icon-person" />
                  <input
                    placeholder="Person"
                    className="bg-transparent text-sm outline-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="w-full">
                <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-[#FD8400] text-center font-semibold text-white">
                  <LuSearch className="text-lg" />
                  <p>Search</p>
                </button>
              </div>
            </div>
            {/* Affiliate company */}
            <div className="mt-10 flex items-center space-x-5">
              {heroData.logo.map((list, idx) => (
                <div key={idx}>
                  <Image
                    src={require(`@/assets/images/Homepage/${list}`)}
                    alt="logo-affiliate"
                    className="grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Background image hero */}

          <Image src={BgHeroSection} alt="hero-section" className="w-[55%]" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
