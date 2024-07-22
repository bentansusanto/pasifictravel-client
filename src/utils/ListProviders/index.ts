import { MutableRefObject } from "react";

export type ListProviders = {
  headPicture: string[];
  city: string;
  country: string;
  descPic: string;
  typeDiagnosa: string[];
  providersType: string;
  id: number;
};

export type ClickOutsideRef = MutableRefObject<HTMLElement | null>;
export type ClickOutsideCallback = () => void;
