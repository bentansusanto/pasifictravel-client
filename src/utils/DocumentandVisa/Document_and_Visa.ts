export type Document_and_Visa = {
  Heading: string;
  subHeading: string;
};

export type CountrySection = {
  headPicture: string;
  Desc: string;
  Flag: string;
  FlagName: string;
  DescWord: string;
  id: number;
};

export type PriceDetailProps = {
  tourists: number;
  pricePerPerson: number;
};
