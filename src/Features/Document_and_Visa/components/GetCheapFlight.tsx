import { Mobile } from "@/config/MediaQuery";
import Image from "next/image";
import { fonts } from "@/config/Themes";
import passportImage from "@/assets/images/Document_and_Visa/pasp-book.png"; // Update this with the actual path to your image
import airplaneImage from "@/assets/images/Document_and_Visa/airplane.png"; // Update this with the actual path to your image
import cabinImage from "@/assets/images/Document_and_Visa/people.png"; // Update this with the actual path to your image
import { FaCircleCheck } from "react-icons/fa6";
import { ListDocumentVisa } from "@/pages/document_and_visa/logic";

const GetcheapFlight = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${fonts.className} my-20`}>
      {isMobile ? (
        <div></div>
      ) : (
        // Desktop & Tablet Device
        <div className="flex md:justify-between lg:space-x-24">
          {/* image */}
          <div className="relative md:w-[80%] lg:w-[100%]">
            <Image
              src={airplaneImage}
              alt="Airplane"
              className="relative rounded-md md:h-[70%] md:w-[50%] lg:h-[386px] lg:w-[386px]"
            />
            <Image
              src={cabinImage}
              alt="cabinimage"
              className="absolute top-44 rounded-md md:left-[20%] md:h-[56%] md:w-[40%] lg:left-32 lg:h-[300px] lg:w-[300px]"
            />
            <Image
              src={passportImage}
              alt="passportImage"
              className="absolute top-12 rounded-md md:left-[35%] md:h-[50%] md:w-[40%] lg:left-64 lg:h-[270px] lg:w-[255px]"
            />
          </div>
          {/* text kontent */}
          <div>
            <p className="text-sm font-bold text-orange-400">
              Why Buy Ticket With Us
            </p>
            <h1 className="py-4 text-2xl font-bold">
              Get Cheap Flight Tickets to Your Favorite Destinations
            </h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="py-10">
              {ListDocumentVisa.map((list, idx) => (
                <div key={idx} className="flex text-sm">
                  <FaCircleCheck className="mr-4 mt-4 text-lg text-green-500" />
                  <div>
                    <h4 className="text-sm font-bold">{list.Heading}</h4>
                    <p className="py-3 text-sm text-gray-400">
                      {list.subHeading}
                    </p>
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

export default GetcheapFlight;
