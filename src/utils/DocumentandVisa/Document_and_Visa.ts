export type Document_and_Visa = {
  Heading: string;
  subHeading: string;
};

export type CountrySection = {
  headPicture: string;
  Desc: string;
  Flag: string;
  FlagName: string;
  Capital_City: string;
  DescWord: string;
  id: number;
  Type_VisaorPass: string;
  type_Country: string;
};

export type PriceDetailProps = {
  tourists: number;
  pricePerPerson: number;
};
