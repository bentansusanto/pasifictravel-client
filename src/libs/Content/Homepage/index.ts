import {
  HeroProps,
  PopularTourProps,
  ServiceProps,
  TestimoniProps,
  WhyChooseUsProps,
} from "@/utils/HomeType";

export const heroData: HeroProps = {
  heading: "Explore More About Tukey With Us.",
  subHeading: "A Different Destination From Other Travel Agencies.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  logo: ["tiketcom-logo.svg", "tiketcom-logo.svg", "tiketcom-logo.svg"],
};

export const serviceData: ServiceProps = {
  heading: "Our Product Services.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  service: [
    {
      name_service: "Tour",
      image: "image-service-tour.jpg",
    },
    {
      name_service: "Flight",
      image: "image-service-flight.jpg",
    },
    {
      name_service: "Hotel",
      image: "image-service-hotel.jpg",
    },
    {
      name_service: "Documents & Visa",
      image: "image-service-documents&visa.jpg",
    },
    {
      name_service: "Car Rental",
      image: "image-service-carrental.jpg",
    },
    {
      name_service: "Bus, Shuttle & Motorcycle",
      image: "image-service-bus&shuttle&motorcycle.jpg",
    },
    {
      name_service: "Entertaiment & Attraction",
      image: "image-service-entertaiment&attraction.jpg",
    },
    {
      name_service: "Health Tourism",
      image: "image-health&tourism.jpg",
    },
  ],
};

export const whyChooseUsData: WhyChooseUsProps = {
  heading: "We Recomended Beautiful Destination Every Month.",
  subHeading: "Why Choose Us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  benefit: [
    {
      name_benefit: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      name_benefit: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      name_benefit: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ],
};

export const popularTour: PopularTourProps = {
  heading: "Popular Destinations.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
};

export const testimoniData: TestimoniProps = {
  heading: "What Our Customer Say About Us.",
  subHeading: "Our Testimoni",
  testimoni: [
    {
      name: "Ardiansyah",
      status: "Students",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      picture: "ardiansyah.svg",
    },
    {
      name: "Salsabila",
      status: "Students",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      picture: "salsabila.svg",
    },
    {
      name: "Susanti",
      status: "Students",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      picture: "susanti.svg",
    },
  ],
};
