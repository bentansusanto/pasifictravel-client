export type modalProps = {
  isVisible: boolean;
  onClose: () => void;
  NameCountry: string;
  NameFlag: string;
  descWords: string;
  capital_City: string;
  id: Number;
  Tiype_ViPa: string;
};

export type modalPropsProvider = {
  isVisible: boolean;
  onClose: () => void;
  headPicture: string[];
  city: string;
  country: string;
  descPic: string;
  typeDiagnosa: string[];
  providersType: string;
  id: number;
};
