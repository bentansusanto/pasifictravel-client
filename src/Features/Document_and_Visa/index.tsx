import React from "react";
import HelpYouProces from "./components/HelpYouProces";
import GetcheapFlight from "./components/GetCheapFlight";
import CountrySection from "./components/CountrySection";
import TestimoniSec from "./components/TestimoniSec";
import BookNow from "./components/BookNow";

const Document_and_Visa = () => {
  return (
    <div className="mt-0 md:px-8 lg:px-24">
      <HelpYouProces />
      <GetcheapFlight />
      <CountrySection />
      <TestimoniSec />
      <BookNow />
    </div>
  );
};

export default Document_and_Visa;
