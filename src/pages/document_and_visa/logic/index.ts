import { Document_and_Visa } from "@/utils/DocumentandVisa/Document_and_Visa";
import { PriceDetailProps } from "@/utils/DocumentandVisa/Document_and_Visa";
import { CountrySection } from "@/utils/DocumentandVisa/Document_and_Visa";

export const ListDocumentVisa: Document_and_Visa[] = [
  {
    Heading: "Lorem ipsum dolor",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    Heading: "Lorem ipsum dolor",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    Heading: "Lorem ipsum dolor",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];

export const PriceList: PriceDetailProps[] = [
  {
    tourists: 3,
    pricePerPerson: 1050100,
  },
];

export const ListCountry: CountrySection[] = [
  {
    headPicture: "switzerland.png",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    Flag: "switzerland-flag.png",
    FlagName: "Switzerland",
    DescWord:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 1,
  },
  {
    headPicture: "canada.png",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    Flag: "canada-flag.png",
    FlagName: "Canada",
    DescWord:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 2,
  },
  {
    headPicture: "china.png",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    Flag: "china-flag.png",
    FlagName: "China",
    DescWord:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 3,
  },
  {
    headPicture: "germany.png",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    Flag: "germany-flag.png",
    FlagName: "Germany",
    DescWord:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 4,
  },
];
