import React, { useState } from "react";
import LogoPasificTravel from "@/assets/images/Homepage/logo-pacific-travelindo.svg"; // Importing the logo image
import { Mobile } from "@/config/MediaQuery"; // Importing a custom hook for detecting mobile view
import { fonts } from "@/config/Themes"; // Importing theme fonts
import { languages, navData } from "@/libs/Content/NavFoot"; // Importing navigation and language data
import { Popover } from "@radix-ui/themes"; // Importing Popover component from Radix UI for desktop dropdown
import Image from "next/image"; // Next.js Image component for optimized image loading
import Link from "next/link"; // Next.js Link component for client-side navigation
import { GoChevronDown } from "react-icons/go"; // Importing Chevron icon from React Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing Menu and Close icons from React Icons
import Modals from "./Modals"; // Importing the custom Modal component

const Navbar: React.FC = () => {
  const { isMobile } = Mobile(); // Destructuring isMobile from Mobile hook to detect screen size
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage the visibility of the modal
  const [openService, setOpenService] = useState<string | null>(null); // State to track which service is toggled

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to toggle the "Our Service" dropdown; closes it if it's already open
  const toggleService = (service: string) => {
    setOpenService(openService === service ? null : service);
  };

  return (
    <div
      className={`${!isMobile && "md:px-8 lg:px-24"} ${fonts.className} py-4`}
    >
      {isMobile ? ( // Conditional rendering based on whether the user is on a mobile device
        <>
          <div className="flex items-center justify-between">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />
            {/* Logo */}
            <button onClick={toggleModal}>
              <AiOutlineMenu size={24} /> {/* Hamburger menu icon */}
            </button>
          </div>

          {isModalOpen && ( // Render the modal if `isModalOpen` is true
            <Modals onClose={toggleModal}>
              <div className="flex max-h-[65vh] flex-col space-y-4">
                {/* Fixed Section: Menu Utama, Login, Register */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between p-5">
                    <p className="text-lg font-bold">Menu Utama</p>{" "}
                    {/* Title */}
                    <button onClick={toggleModal}>
                      <AiOutlineClose size={18} /> {/* Close icon */}
                    </button>
                  </div>
                  <hr className="border-gray-400" />
                  <div className="flex space-x-4 px-5 py-6">
                    <button className="flex-1 rounded bg-gray-100 py-2.5 font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                      Login
                    </button>
                    <button className="flex-1 rounded bg-orange-500 py-2.5 font-medium text-white hover:bg-orange-600">
                      Register
                    </button>
                  </div>
                  <hr className="border-gray-400" />
                </div>

                {/* Scrollable Section: Home, Our Service, Blog */}
                <div className="hide-scrollbar flex-1 overflow-y-auto px-5">
                  <ul>
                    {navData.map((list, idx) => (
                      <li key={idx} className="my-2">
                        <button
                          onClick={() => toggleService(list.page)} // Toggle "Our Service" dropdown
                          className="flex w-full items-center justify-between text-sm font-medium"
                        >
                          {list.page} {/* Navigation item title */}
                          {list.page === "Our Service" && (
                            <GoChevronDown
                              className={`transform transition-transform ${openService === list.page ? "rotate-180" : ""}`}
                            />
                          )}
                        </button>
                        {list.page === "Our Service" &&
                          openService === list.page && (
                            <ul className="pl-9">
                              {list.dropDown?.map((data, idx) => (
                                <li key={idx} className="py-2">
                                  <Link
                                    href={data.link}
                                    className="flex items-center space-x-2"
                                  >
                                    <Image
                                      src={require(
                                        `@/assets/icon/${data.icon}`,
                                      )}
                                      alt="icon-service"
                                    />
                                    <p className="text-sm text-gray-500">
                                      {data.name_service}
                                    </p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Modals>
          )}
        </>
      ) : (
        // Desktop View
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />{" "}
            {/* Logo */}
            <div className="flex items-center space-x-8">
              {navData.map((list, idx) => (
                <Popover.Root key={idx}>
                  {" "}
                  {/* Using Popover for dropdown on desktop */}
                  <Popover.Trigger>
                    <Link href={list.link} className="text-sm">
                      {list.page} {/* Navigation item title */}
                    </Link>
                  </Popover.Trigger>
                  {list.page === "Our Service" && (
                    <Popover.Content
                      size="1"
                      maxWidth="300px"
                      className="shadow-sm"
                    >
                      <ul className={`${fonts.className} space-y-1`}>
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
                              />
                              <p className="text-sm text-gray-500">
                                {data.name_service} {/* Name of the service */}
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
          <div className="flex items-center space-x-2">
            <Popover.Root>
              <Popover.Trigger>
                <div className="flex items-center space-x-1 text-gray-500">
                  <p className="text-sm font-medium">EN</p>{" "}
                  {/* Language selector */}
                  <GoChevronDown className="text-lg" />
                </div>
              </Popover.Trigger>
              <Popover.Content size="1" maxWidth="300px" className="mt-3">
                <ul className={`${fonts.className} space-y-3`}>
                  {languages.map((list, idx) => (
                    <li key={idx} className="text-sm text-gray-500">
                      {list} {/* Language options */}
                    </li>
                  ))}
                </ul>
              </Popover.Content>
            </Popover.Root>
            <button className="text-sm font-medium text-gray-500">Login</button>{" "}
            {/* Login button */}
            <button className="rounded-sm bg-gray-200 px-5 py-2.5 font-medium text-gray-500">
              Sign Up
            </button>
            {/* Sign Up button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
