import { ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
}

export type ServiceProps = {
  name_service: string;
  link: string;
  icon?: string;
};

export type NavProps = {
  page: string;
  link: any;
  dropDown?: ServiceProps[];
};

export type ContentProps = {
  heading: string;
  subHeading?: string;
  description?: string;
};

export type Contact = {
  address: string;
  phoneNumber: string;
};

export interface CustomerSupport extends ServiceProps {}

export interface SocialMedia extends ServiceProps{}

export interface NavCompany extends ServiceProps{}
