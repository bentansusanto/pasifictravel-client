import { ContentProps } from "../GlobalType";

export interface HeroProps extends ContentProps {
  logo: string[];
}

type Service = {
  name_service: string;
  image: string;
  link?: string;
};

export interface ServiceProps extends ContentProps {
  service: Service[];
}

type Benefit = {
  name_benefit: string;
  desc: string;
};

export interface WhyChooseUsProps extends ContentProps {
  benefit: Benefit[];
}

export interface PopularTourProps extends ContentProps {}

type Testimoni = {
    name: string;
    status: string;
    message: string;
    picture: string;
}

export interface TestimoniProps extends ContentProps{
    testimoni: Testimoni[]
}