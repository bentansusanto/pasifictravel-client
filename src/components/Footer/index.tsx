import LogoPasificTravel from "@/assets/images/Homepage/logo-pacific-travelindo.svg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import {
  contact,
  navData,
  navCompany,
  customerSupport,
} from "@/libs/Content/NavFoot";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"; // Example icons for social media

const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear();

  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-36 pb-5 md:mx-8 lg:mx-20"} mt-10`}
    >
      {isMobile ? (
        // Mobile device
        <div className="items-left flex flex-col space-y-6 px-4">
          {/* Logo */}
          <div className="pb-3">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />
          </div>

          {/* Newsletter */}
          <div className="w-64 space-y-3 py-4 text-left">
            <p className="text-base font-semibold">Newsletter</p>
            <p className="py-3 text-sm text-gray-500">
              Subscribe our newsletter and get exciting info.
            </p>
            <div className="flex items-center overflow-hidden rounded-md bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-orange-500 px-4 py-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 12l18-6-8 6 8 6-18-6z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pb-9 text-orange-500">
            <FaFacebookF className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
            <FaTiktok className="h-5 w-5" />
          </div>

          {/* Links */}
          <div className="grid w-full grid-cols-2 gap-6 text-left">
            {/* Products */}
            <div>
              <p className="text-base font-semibold">Products</p>
              <ul className="mt-2 space-y-2">
                {navData[1].dropDown?.map((list, idx) => (
                  <li key={idx} className="text-xs text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-base font-semibold">Company</p>
              <ul className="mt-2 space-y-2">
                {navCompany.map((list, idx) => (
                  <li key={idx} className="text-xs text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <p className="text-base font-semibold">Customer Support</p>
              <ul className="mt-2 space-y-2">
                {customerSupport.map((list, idx) => (
                  <li key={idx} className="text-xs text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <p className="text-base font-semibold">Contact Us</p>
              <div className="mt-2 space-y-1 text-xs text-gray-500">
                <p>{contact.address}</p>
                <p>{contact.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop & Tablet Device
        <div className="flex md:space-x-10 lg:space-x-16">
          {/* Logo, contact, social media */}
          <div className="w-[25%] space-y-8">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />
            <div className="space-y-2">
              <p className="text-sm">{contact.address}</p>
              <p className="text-sm">{contact.phoneNumber}</p>
            </div>
          </div>
          {/* Service, company, customer support, newsletter */}
          <div className="md:grid md:grid-cols-2 md:gap-3 lg:flex lg:space-x-10">
            {/* Quick links */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Our Services</p>
              <ul className="space-y-3">
                {navData[1].dropDown?.map((list, idx) => (
                  <li key={idx} className="text-sm text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Company</p>
              <ul className="space-y-3">
                {navCompany.map((list, idx) => (
                  <li key={idx} className="text-sm text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Customer support */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Customer Support</p>
              <ul className="space-y-3">
                {customerSupport.map((list, idx) => (
                  <li key={idx} className="text-sm text-gray-500">
                    <Link href={list.link}>{list.name_service}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Subscribe newsletter */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Newsletter</p>
              <div className="flex justify-between bg-white pl-3 lg:w-[22vw]">
                <input
                  placeholder="enter your email here"
                  className="w-full bg-transparent text-sm placeholder:text-sm"
                />
                <button className="rounded-md bg-orange-500 py-3 font-semibold text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="mt-10 text-center text-sm text-gray-400">
        ©{date}, Pacific Travel | All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;
