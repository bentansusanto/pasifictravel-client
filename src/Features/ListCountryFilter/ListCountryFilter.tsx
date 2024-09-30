import { useEffect, useState, ChangeEvent, useRef, useCallback } from "react";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { FilterCountryCaption } from "./logic";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { truncateText } from "../Document_and_Visa/components/Logic/TruncatedText";
import Modal from "../Document_and_Visa/components/Modal";
import Image from "next/image";
import { GrMap } from "react-icons/gr";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import {
  ListCountry,
  listDocumentCountry,
  sortingDocumentCountry,
} from "@/pages/document_and_visa/logic";
import { CountrySection } from "@/utils/DocumentandVisa/Document_and_Visa";
import { Spinner } from "@radix-ui/themes";

const ListCountryFilter = () => {
  const { isMobile } = Mobile();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [locationInput, setLocationInput] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [autoLoad, setAutoLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const locationRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = ListCountry.filter((country) =>
    country.FlagName.toLowerCase().includes(locationInput.toLowerCase()),
  ).slice(0, 8);

  const handleLocationSelect = (country: CountrySection) => {
    setLocationInput(country.FlagName);
    setSearchTerm(country.FlagName.toLowerCase());
    setShowLocationDropdown(false);
  };

  const showMoreItems = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter((preFilter) => (preFilter === filter ? "" : filter));
  };

  const handleSortingChange = (sorting: string) => {
    setSelectedSorting((prevSorting) =>
      prevSorting === sorting ? "" : sorting,
    );
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationInput(event.target.value);
    setSearchTerm(event.target.value.toLowerCase());
    setShowLocationDropdown(true);
  };

  const filterCountries = (countries: CountrySection[]) => {
    let filteredCountries = countries;

    if (selectedFilter) {
      filteredCountries = filteredCountries.filter(
        (country) =>
          country.FlagName.toLowerCase() === selectedFilter.toLowerCase() ||
          country.Type_VisaorPass.toLowerCase() ===
            selectedFilter.toLowerCase(),
      );
    }
    if (searchTerm) {
      filteredCountries = filteredCountries.filter((country) =>
        country.FlagName.toLowerCase().includes(searchTerm),
      );
    }
    return filteredCountries;
  };

  const sortCountries = (countries: CountrySection[]) => {
    if (selectedSorting === "Popular") {
      return countries.filter((country) => country.type_Country === "Popular");
    }
    if (selectedSorting === "Tidak Popular") {
      return countries.filter(
        (country) => country.type_Country === "Tidak Popular",
      );
    }
    return countries;
  };

  const filteredAndSortedCountries = sortCountries(
    filterCountries(ListCountry),
  );

  const openModal = (id: number) => {
    setActiveModalId(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setActiveModalId(null);
  };

  useEffect(() => {
    if (!autoLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          showMoreItems();
        }
      },
      { threshold: 1.0 },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [autoLoad, showMoreItems]);

  const handleShowMore = () => {
    showMoreItems();
    setAutoLoad(true);
  };

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="mt-20 md:px-8 lg:px-24">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold md:w-[55%] lg:w-[35%]">
              {FilterCountryCaption.HeadTitle}
            </h1>
            <p className="text-sm text-gray-500 md:w-[35%] lg:w-[55%]">
              {FilterCountryCaption.DescHead}
            </p>
          </div>
          <div className="mt-10 flex md:space-x-6   lg:space-x-10">
            <div>
              <div className="sticky top-10 space-y-5">
                {/* Search Country Section */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Search Country</h2>
                  <div
                    className="mt-4 flex items-center space-x-3 rounded-md bg-gray-100 p-3"
                    ref={locationRef}
                  >
                    <GrMap className="text-[18px] text-gray-400" />
                    <input
                      value={locationInput}
                      placeholder="Search Country"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
                      onChange={handleSearchChange}
                      onClick={() => setShowLocationDropdown(true)}
                    />
                    {showLocationDropdown && (
                      <div className="absolute left-0 top-28 z-10 w-full rounded-md bg-white shadow-lg">
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
                {/* List Document Section */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">List Document</h2>
                  <div className="mt-5 space-y-2">
                    {listDocumentCountry.map((list, idx) => (
                      <div
                        key={idx}
                        className="flex cursor-pointer items-center space-x-3"
                        onClick={() => handleFilterChange(list)}
                      >
                        {selectedFilter === list ? (
                          <IoIosRadioButtonOn className="mr-2 text-2xl text-orange-300" />
                        ) : (
                          <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
                        )}
                        <p
                          className={`text-sm ${
                            selectedFilter === list
                              ? "text-orange-500"
                              : "text-gray-400"
                          }`}
                        >
                          {list}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Sorting Section */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Sorting</h2>
                  <div className="mt-5 space-y-2">
                    {sortingDocumentCountry.map((list, idx) => (
                      <div
                        key={idx}
                        className="flex cursor-pointer items-center space-x-3"
                        onClick={() => handleSortingChange(list)}
                      >
                        {selectedSorting === list ? (
                          <IoIosRadioButtonOn className="mr-2 text-2xl text-orange-300" />
                        ) : (
                          <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
                        )}
                        <p
                          className={`text-sm ${
                            selectedSorting === list
                              ? "text-orange-500"
                              : "text-gray-400"
                          }`}
                        >
                          {list}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Country List Section */}
              <div className="grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8">
                {filteredAndSortedCountries
                  .slice(0, visibleCount)
                  .map((list) => (
                    <div key={list.id}>
                      <div className="group relative">
                        <Image
                          src={require(
                            `@/assets/images/Document_and_Visa/${list.headPicture}`,
                          )}
                          alt={`${list.FlagName}-picture`}
                          className="rounded-md"
                        />
                        <div className="absolute inset-0 hidden items-center justify-center bg-black bg-opacity-50 transition-opacity group-hover:flex">
                          <HiMagnifyingGlass
                            onClick={() => openModal(list.id)}
                            className="text-3xl text-white hover:text-4xl"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 py-4">
                          <Image
                            src={require(
                              `@/assets/images/Document_and_Visa/${list.Flag}`,
                            )}
                            alt={`${list.FlagName}-picture`}
                            className="h-3.5 w-4"
                          />
                          <p className="text-sm font-semibold">
                            {list.FlagName}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            {truncateText(list.DescWord, 69)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                {activeModalId !== null && (
                  <Modal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                    NameCountry={
                      ListCountry.find(
                        (country) => country.id === activeModalId,
                      )?.FlagName || ""
                    }
                    NameFlag={
                      ListCountry.find(
                        (country) => country.id === activeModalId,
                      )?.headPicture || ""
                    }
                    descWords={
                      ListCountry.find(
                        (country) => country.id === activeModalId,
                      )?.DescWord || ""
                    }
                    capital_City={
                      ListCountry.find(
                        (country) => country.id === activeModalId,
                      )?.Capital_City || ""
                    }
                    id={activeModalId}
                    Tiype_ViPa={"string"}
                  />
                )}
              </div>
              <div className="mt-10 text-center">
                {visibleCount < filteredAndSortedCountries.length &&
                  !autoLoad && (
                    <button
                      onClick={handleShowMore}
                      className="mr-2 rounded-md bg-orange-500 px-4 py-2 text-white"
                    >
                      Show More
                    </button>
                  )}
                {autoLoad && <div ref={loadMoreRef}></div>}
                {loading && (
                  <div className="mt-4 flex justify-center">
                    {/* <Spinner.Root className="inline-block">
                      <Spinner.Indicator className="h-8 w-8 animate-spin text-gray-600" />
                    </Spinner.Root> */}
                    <Spinner />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCountryFilter;
