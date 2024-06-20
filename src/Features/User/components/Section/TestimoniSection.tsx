import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { testimoniData } from "@/libs/Content/Homepage";
import Image from "next/image";
import Quotes from '@/assets/images/Homepage/quotes.png'

const TestimoniSection = () => {
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
            {/* Heading with button cta to booking tour */}
          <div className="flex items-end justify-between">
            <div className="space-y-2 lg:w-[50%] md:w-[80%]">
              <p className="text-sm font-semibold text-[#FF8500]">
                {testimoniData.subHeading}
              </p>
              <h1 className="w-[70%] text-4xl font-bold leading-snug">
                {testimoniData.heading}
              </h1>
            </div>
            <div>
                <button className="bg-[#FF8500] rounded-md text-white font-semibold">Book Now</button>
            </div>
          </div>
          {/* Testimoni */}
          <div className="flex space-x-3 mt-16">
                {
                    testimoniData.testimoni.map((list, idx) => (
                        <div key={idx} className="relative">
                            <div className="space-y-5 bg-white p-5 rounded-md">
                                <p className="text-[15px] font-semibold">{list.message}</p>
                                <div className="flex items-center space-x-3">
                                    <Image src={require(`@/assets/images/Homepage/${list.picture}`)} alt="picture-testimoni"/>
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold">{list.name}</p>
                                        <p className="text-sm text-gray-400">{list.status}</p>
                                    </div>
                                </div>
                            </div>
                            <Image src={Quotes} alt="quotes-testimoni" className="absolute -top-12 right-0 w-[30%]"/>
                        </div>
                    ))
                }
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimoniSection;
