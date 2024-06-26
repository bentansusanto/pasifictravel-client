import BgCTA from "@/assets/images/Homepage/bg-cta.jpg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";

const CTASection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-44 md:mx-20 lg:mx-72"}`}
    >
      {isMobile ? (
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="relative flex">
          <Image src={BgCTA} alt="bg-cta" className="rounded-md"/>
          <div className="space-y-5 absolute content-center inset-0 text-center">
            <h1 className="text-4xl w-[70%] mx-auto font-bold text-white">
              Book Now to Get Our Attractive Promotions
            </h1>
            <div>
              <button className="rounded-md bg-[#FF8500] font-semibold text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTASection;
