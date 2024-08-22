import LogoPasificTravel from "@/assets/images/Homepage/logo-pacific-travelindo.svg";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { contact, navData, navCompany, customerSupport } from "@/libs/Content/NavFoot";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear()

  return (
    <div
      className={`${fonts.className} ${!isMobile && "mt-36 pb-5 md:mx-8 lg:mx-20"}`}
    >
      {isMobile ? (
        // Mobile device
        <></>
      ) : (
        // Desktop & Tablet Device
        <div className="flex lg:space-x-16 md:space-x-10">
          {/* logo, contact, socialmedia */}
          <div className="w-[25%] space-y-8">
            <Image src={LogoPasificTravel} alt="logo-pasifictravel" />
            <div className="space-y-2">
              <p className="text-sm">{contact.address}</p>
              <p className="text-sm">{contact.phoneNumber}</p>
            </div>
          </div>
          {/* service, company, customer support, newsletter */}
          <div className="lg:flex md:grid md:grid-cols-2 md:gap-3 lg:space-x-10">
            {/* quicklink */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Our Services</p>
              <ul className="space-y-3">
                {
                    navData[1].dropDown?.map((list, idx) => (
                        <li key={idx} className="text-sm text-gray-500">
                            <Link href={list.link}>{list.name_service}</Link>
                        </li>
                    ))
                }
              </ul>
            </div>
            {/* company */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Company</p>
              <ul className="space-y-3">
                {
                    navCompany.map((list, idx) => (
                        <li key={idx} className="text-sm text-gray-500">
                            <Link href={list.link}>{list.name_service}</Link>
                        </li>
                    ))
                }
              </ul>
            </div>
            {/* Customer support */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Customer Support</p>
              <ul className="space-y-3">
                {
                    customerSupport.map((list, idx) => (
                        <li key={idx} className="text-sm text-gray-500">
                            <Link href={list.link}>{list.name_service}</Link>
                        </li>
                    ))
                }
              </ul>
            </div>
            {/* Subscribe newsletter */}
            <div className="space-y-5">
              <p className="text-sm font-semibold">Newsletter</p>
                <div className="bg-white pl-3 lg:w-[22vw] flex justify-between">
                    <input placeholder="enter your email here" className="text-sm w-full placeholder:text-sm bg-transparent"/>
                    <button className="bg-orange-500 py-3 font-semibold rounded-md text-white">Subscribe</button>
                </div>
            </div>
          </div>
        </div>
      )}
      <footer className="text-center text-sm text-gray-400 mt-10">
            ©{date}, Pasific Travel | All Right Reserved
          </footer>
    </div>
  );
};

export default Footer;
