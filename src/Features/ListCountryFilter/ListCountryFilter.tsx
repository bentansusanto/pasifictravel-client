import { useState, ChangeEvent } from "react";
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

const ListCountryFilter = () => {
  const { isMobile } = Mobile();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedSorting, setSelectedSorting] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const openModal = (id: number) => {
    setActiveModalId(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setActiveModalId(null);
  };

  const handleOpenModal = (id: number) => () => openModal(id);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const resetItems = () => {
    setVisibleCount(6);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter((preFilter) => (preFilter === filter ? "" : filter));
    resetItems();
  };

  const handleSortingChange = (sorting: string) => {
    setSelectedSorting((prevSorting) =>
      prevSorting === sorting ? "" : sorting,
    );
    resetItems();
  };
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    resetItems();
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
    // ini untuk sorting by search
    if (searchTerm) {
      filteredCountries = filteredCountries.filter((country) =>
        country.FlagName.toLowerCase().includes(searchTerm),
      );
    }

    return filteredCountries;
  };

  const sortCountries = (countries: CountrySection[]) => {
    let sortedCountries = [...countries];

    if (selectedSorting === "Popular") {
      sortedCountries = sortedCountries.filter(
        (country) => country.type_Country === "Popular",
      );
    } else if (selectedSorting === "Tidak Popular") {
      sortedCountries = sortedCountries.filter(
        (country) => country.type_Country === "Tidak Popular",
      );
    }

    return sortedCountries;
  };

  const filteredAndSortedCountries = sortCountries(
    filterCountries(ListCountry),
  );

  return (
    <div className={` ${fonts.className}`}>
      {isMobile ? (
        // Mobile device
        <div></div>
      ) : (
        // Desktop and Tablet Device
        <div className="mt-20 md:px-8 lg:px-24">
          <div className={"space-y-3"}>
            <h1 className="text-2xl font-semibold md:w-[55%] lg:w-[35%]">
              {FilterCountryCaption.HeadTitle}
            </h1>
            <p className="text-sm text-gray-500 md:w-[35%] lg:w-[55%]">
              {FilterCountryCaption.DescHead}
            </p>
          </div>
          <div className="mt-10 flex lg:space-x-10">
            <div className="block">
              {/* Filter, Category, dan Sorting */}
              <div className="sticky top-10 space-y-5">
                {/* Search Tour */}
                <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                  <h2 className="font-semibold">Search Country</h2>
                  <div className="mt-4 flex items-center space-x-3 rounded-md bg-gray-100 p-3">
                    <GrMap className="text-[18px] text-gray-400" />
                    <input
                      placeholder="Search Country"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                {/* Category */}
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
                {/* Sorting */}
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
              {/* viewsorting */}
              <div className="grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8">
                {filteredAndSortedCountries
                  .slice(0, visibleCount)
                  .map((list, idx) => (
                    <div key={idx} className="">
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
                            onClick={handleOpenModal(list.id)}
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
                            {truncateText(`${list.DescWord}`, 69)}
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
                {visibleCount < filteredAndSortedCountries.length && (
                  <button
                    onClick={showMoreItems}
                    className="mr-2 rounded-md bg-orange-500 px-4 py-2 text-white"
                  >
                    Show More
                  </button>
                )}
                {visibleCount > 6 && (
                  <button
                    onClick={resetItems}
                    className="rounded-md bg-red-500 px-4 py-2 text-white"
                  >
                    Close
                  </button>
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
