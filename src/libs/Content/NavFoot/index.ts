import { Contact, CustomerSupport, NavCompany, NavProps, SocialMedia } from "@/utils/GlobalType";

export const navData: NavProps[] = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Our Service",
    link: "",
    dropDown: [
      {
        name_service: "Tour",
        link: "/",
        icon: "icon-tour.svg",
      },
      {
        name_service: "Hotel",
        link: "/",
        icon: "icon-hotel.svg",
      },
      {
        name_service: "Pesawat",
        link: "/",
        icon: "icon-flight.svg",
      },
      {
        name_service: "Documents & Visa",
        link: "/",
        icon: "icon-documents-visa.svg",
      },
      {
        name_service: "Rental Car",
        link: "/",
        icon: "icon-rental-car.svg",
      },
      {
        name_service: "Bus, Shuttle & Motorcycle",
        link: "/",
        icon: "icon-bus-shuttle-motorcycle.svg",
      },
      {
        name_service: "Entertaiment & Attraction",
        link: "/",
        icon: "icon-entertaiment-attraction.svg",
      },
      {
        name_service: "Health Tourism",
        link: "/",
        icon: "icon-health-tourism.svg",
      },
    ],
  },
  {
    page: "Blog",
    link: "/",
  },
];

export const languages = ["Indonesia", "English", "Turkey"]

export const contact:Contact = {
    address: "Ruko Vila Delima No. 7, Jl. Karang Tengah Raya Kav. 9, Jakarta Selatan",
    phoneNumber: "+62 882 7745 0792"
  }

export const customerSupport:CustomerSupport[] = [
  {
    name_service: "Account",
    link: "/"
  },
  {
    name_service: "Feedback",
    link: "/"
  },
  {
    name_service: "Privacy & Policy",
    link: "/"
  },
  {
    name_service: "Terms & Condition",
    link: "/"
  },
]

export const navCompany:NavCompany[] = [
  {
    name_service: "About Us",
    link: "/"
  },
  {
    name_service: "Blog",
    link: "/"
  },
  {
    name_service: "FAQ",
    link: "/"
  },
]

export const socialMedia:SocialMedia[] = [
  {
    name_service: "instagram",
    link: "/",
    icon: "instagram.svg"
  },
  {
    name_service: "facebook",
    link: "/",
    icon: "facebook.svg"
  },
  {
    name_service: "tiktok",
    link: "/",
    icon: "tiktok.svg"
  },
]