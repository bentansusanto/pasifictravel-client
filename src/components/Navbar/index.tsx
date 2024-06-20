import LogoPasificTravel from "@/assets/images/logo-pacific-travelindo.svg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { languages, navData } from "@/libs/Content/NavFoot";
import { Popover } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${!isMobile && "md:px-8 lg:px-24"}  ${fonts.className} py-4`}>
      {isMobile ? (
        <></>
      ) : (
        // Desktop & Mobile
        <div className="flex items-center justify-between">
          {/* Logo dan Navigation Bar */}
          <div className="flex items-center space-x-10">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />
            <div className="flex items-center space-x-8">
              {navData.map((list, idx) => (
                <Popover.Root key={idx}>
                  <Popover.Trigger>
                    <Link
                      href={list.link}
                      className={`text-sm`}
                    >
                      {list.page}
                    </Link>
                  </Popover.Trigger>
                  {list.page === "Our Service" && (
                    <Popover.Content size="1" maxWidth="300px" className="shadow-sm">
                      <ul className={`  ${fonts.className} space-y-1`}>
                        {list.dropDown?.map((data, idx) => (
                          <li
                            key={idx}
                            className="p-2.5 transition-all duration-300 hover:bg-gray-100"
                          >
                            <Link
                              href={data.link}
                              className="flex items-center space-x-2"
                            >
                              <Image
                                src={require(`@/assets/icon/${data.icon}`)}
                                alt="icon-service"
                                className=""
                              />
                              <p className="text-sm text-gray-500">
                                {data.name_service}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Popover.Content>
                  )}
                </Popover.Root>
              ))}
            </div>
          </div>
          {/* Authentication dan Languages */}
          <div className="flex items-center space-x-2">
            {/* Select Languages */}
            <Popover.Root>
              <Popover.Trigger>
                <div className="flex items-center space-x-1 text-gray-500">
                  <p className="text-sm font-medium">EN</p>
                  <GoChevronDown className="text-lg" />
                </div>
              </Popover.Trigger>
              <Popover.Content size="1" maxWidth="300px" className="mt-3">
                <ul className={`  ${fonts.className} space-y-3`}>
                  {languages.map((list, idx) => (
                    <li key={idx} className="text-sm text-gray-500">{list}</li>
                  ))}
                </ul>
              </Popover.Content>
            </Popover.Root>
            {/* Authentication */}
              <button className="font-medium text-gray-500 text-sm">Login</button>
              <button className="font-medium text-gray-500 rounded-sm bg-gray-200 px-5 py-2.5">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
