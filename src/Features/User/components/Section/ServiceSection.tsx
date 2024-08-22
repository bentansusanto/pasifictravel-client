import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { serviceData } from "@/libs/Content/Homepage";
import Image from "next/image";


const ServiceSection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={` ${fonts.className} ${!isMobile && "mt-36 md:mx-8 lg:mx-24"}`}
    >
      {isMobile ? (
        // Mobile Device
        <></>
      ) : (
        // Desktop & Tablet Device
        <div>
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{serviceData.heading}</h1>
            <p className="text-sm text-gray-400 lg:w-[30%]">
              {serviceData.description}
            </p>
          </div>
          {/* List Service */}
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {serviceData.service.map((list, idx) => (
              <div key={idx} className="relative flex">
                <Image
                  src={require(`@/assets/images/Service/${list.image}`)}
                  alt="list-service"
                  className="rounded-md"
                />
                <p className="absolute inset-0 content-center text-center text-[15px] font-semibold text-white">
                  {list.name_service}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSection;
