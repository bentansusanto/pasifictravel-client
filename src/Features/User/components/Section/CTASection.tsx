import BgCTA from "@/assets/images/Homepage/bg-cta.jpg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";

const CTASection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-44 md:mx-20 lg:mx-72"} mt-10`}
    >
      {isMobile ? (
        // Mobile Device
        <div className="px-4">
          <div className="relative flex items-center justify-center">
            <Image
              src={BgCTA}
              alt="bg-cta"
              className="h-64 w-full rounded-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 text-center">
              <h1 className="mx-4 text-2xl font-bold text-white">
                Book Now to Get Our Attractive Promotions
              </h1>
              <button className="rounded-md bg-[#FF8500] px-4 py-2 font-semibold text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Desktop & Tablet Device
        <div className="relative flex">
          <Image src={BgCTA} alt="bg-cta" className="rounded-md" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 text-center">
            <h1 className="mx-auto w-[70%] text-4xl font-bold text-white">
              Book Now to Get Our Attractive Promotions
            </h1>
            <button className="rounded-md bg-[#FF8500] px-6 py-3 font-semibold text-white">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTASection;
