import BgCTA from "@/assets/images/Homepage/bg-cta.jpg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";

const BookNow = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-44 md:mx-12 lg:mx-48"}`}
    >
      {isMobile ? (
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="relative flex">
          <Image src={BgCTA} alt="bg-cta" className="rounded-md" />
          <div className="absolute inset-0 content-center space-y-5 text-center">
            <h1 className="mx-auto w-auto text-4xl font-bold text-white">
              Book Now to Get Our Attractive Promotions
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
