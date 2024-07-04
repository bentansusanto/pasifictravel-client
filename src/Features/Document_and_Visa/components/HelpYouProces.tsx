import { Mobile } from "@/config/MediaQuery";
import Image from "next/image";
import { fonts } from "@/config/Themes";
import { GrMap } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { ListCountry } from "@/pages/document_and_visa/logic";
import Modal from "./Modal";
import { CountrySection } from "@/utils/DocumentandVisa/Document_and_Visa";

const visaOptions = ["Visa", "Passport"];

const HelpYouProces = () => {
  const { isMobile } = Mobile();
  const [locationInput, setLocationInput] = useState<string>("");
  const [selectedLocationId, setSelectedLocationId] = useState<number>(0);
  const [selectedHeadPicture, setSelectedHeadPicture] = useState<string>("");
  const [selectedDesc, setSelectedDesc] = useState<string>("");
  const [selectedFlag, setSelectedFlag] = useState<string>("");
  const [selectedCapital_City, setSelectedCapital_City] = useState<string>("");
  const [selectedDescWord, setSelectedDescWord] = useState<string>("");
  const [selectedType_VisaorPass, setSelectedType_VisaorPass] =
    useState<string>("");
  const [visaInput, setVisaInput] = useState<string>("");
  const [showLocationDropdown, setShowLocationDropdown] =
    useState<boolean>(false);
  const [showVisaDropdown, setShowVisaDropdown] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const [selectedVisa, setSelectedVisa] = useState<string>("");

  const locationRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocationId(0);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
      if (visaRef.current && !visaRef.current.contains(event.target as Node)) {
        setShowVisaDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocationClick = () => {
    setShowLocationDropdown(true);
    setShowVisaDropdown(false);
  };

  const handleVisaClick = () => {
    setShowVisaDropdown(true);
    setShowLocationDropdown(false);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  };

  const handleVisaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVisaInput(e.target.value);
  };

  const handleSearchClick = () => {
    if (!locationInput || !visaInput) {
      alert("Please select both a location and a visa.");
      return;
    }
    setSelectedLocation(locationInput);
    setSelectedVisa(visaInput);
    setIsModalOpen(true);
  };

  const filteredCountries = ListCountry.filter((country) =>
    country.FlagName.toLowerCase().includes(locationInput.toLowerCase()),
  ).slice(0, 6);

  const filteredVisas = visaOptions.filter((option) =>
    option.toLowerCase().includes(visaInput.toLowerCase()),
  );

  const handleLocationSelect = (country: CountrySection) => {
    setLocationInput(country.FlagName);
    setSelectedLocationId(country.id);
    setShowLocationDropdown(false);
    setSelectedHeadPicture(country.headPicture);
    setSelectedDesc(country.Desc);
    setSelectedDescWord(country.DescWord);
    setSelectedFlag(country.Flag);
    setSelectedCapital_City(country.Capital_City);
    setSelectedType_VisaorPass(country.Type_VisaorPass);
  };

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="">
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <Image
              src={require("@/assets/images/Document_and_Visa/book-pasp.png")}
              alt="book-pasport"
              className="rounded-md"
            />
            <div className="absolute inset-0 content-center px-5 text-center">
              <h1 className="font-semibold text-white md:text-[26px] lg:text-[52px]">
                We Help You Process Your Visa Quickly, Easily and Reliably
              </h1>
              <div className="mx-5 md:mx-[7rem] lg:mx-40">
                <div className="mt-12 flex w-auto flex-col items-end space-y-4 rounded-md bg-white p-4 md:flex-row md:space-x-5 md:space-y-0">
                  <div
                    ref={locationRef}
                    className="space-y-2 md:w-auto lg:w-full"
                  >
                    <p className="text-left text-sm text-gray-400">
                      Where you go?
                    </p>
                    <div className="relative flex items-center space-x-2 rounded-md bg-gray-100 px-2 py-2.5 md:w-28 lg:w-full">
                      <GrMap className="md:text-xs lg:text-sm" />
                      <input
                        value={locationInput}
                        onClick={handleLocationClick}
                        onChange={handleLocationChange}
                        placeholder="Location"
                        className="bg-transparent outline-none placeholder:text-sm md:text-xs lg:text-sm"
                      />
                      {showLocationDropdown && (
                        <div className="absolute left-0 top-12 z-10 w-full rounded-md bg-white shadow-lg">
                          {filteredCountries.map((country) => (
                            <div
                              key={country.id}
                              className="cursor-pointer p-2 hover:bg-gray-200"
                              onClick={() => handleLocationSelect(country)}
                            >
                              {country.FlagName}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div ref={visaRef} className="w-full space-y-2">
                    <p className="text-left text-gray-400 md:text-xs lg:text-sm">
                      Select Document
                    </p>
                    <div className="relative flex items-center space-x-2 rounded-md bg-gray-100 py-2.5 md:w-28 lg:w-full">
                      <LuSearch className="md:text-xs lg:text-sm" />
                      <input
                        value={visaInput}
                        onClick={handleVisaClick}
                        onChange={handleVisaChange}
                        placeholder="Visa"
                        className="bg-transparent outline-none md:text-xs placeholder:md:text-sm lg:text-sm placeholder:lg:text-sm"
                      />
                      {showVisaDropdown && (
                        <div className="absolute left-0 top-12 z-10 w-full rounded-md bg-white shadow-lg">
                          {filteredVisas.map((option, index) => (
                            <div
                              key={index}
                              className="cursor-pointer p-2 hover:bg-gray-200"
                              onClick={() => {
                                setVisaInput(option);
                                setShowVisaDropdown(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSearchClick}
                      className="flex items-center justify-center space-x-2 rounded-md bg-[#FD8400] py-2.5 text-center font-semibold text-white md:w-28 lg:w-full"
                    >
                      <LuSearch className="md:text-xs lg:text-lg" />
                      <p className="md:text-xs lg:text-sm">Check Document</p>
                    </button>
                  </div>
                  {isModalOpen !== false && (
                    <Modal
                      isVisible={isModalOpen}
                      onClose={closeModal}
                      NameCountry={locationInput}
                      NameFlag={selectedHeadPicture}
                      descWords={selectedDescWord}
                      capital_City={selectedCapital_City}
                      id={selectedLocationId}
                      Tiype_ViPa={visaInput}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpYouProces;
