import React, { useState, useRef, ChangeEvent } from "react";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { FaRibbon } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import useClickOutside from "../logic/useClickOutside"; // Ensure the correct path
import { ProvidersList } from "@/libs/Content/ListProviders";
import { ListProviders } from "@/utils/ListProviders";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import Modal from "./Modal"; // Updated import for Modal component
import { modalPropsProvider } from "@/utils/Modal/modalProps"; // Ensure the correct path

const ListProvider = () => {
  const { isMobile } = Mobile();
  const [showDropdown, setShowDropdown] = useState<boolean[]>([false, false]);
  const [diagnosaInput, setDiagnosaInput] = useState<string>("");
  const [locationInput, setLocationInput] = useState<string>("");
  const [selectedProviderType, setSelectedProviderType] = useState<
    string | null
  >(null);
  const [selectedProvider, setSelectedProvider] =
    useState<modalPropsProvider | null>(null);
  const diagnosaRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const providerTypesArray = Array.from(
    new Set(ProvidersList.map((provider) => provider.providersType)),
  );

  const closeDropDown = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleClickDropDown = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useClickOutside(diagnosaRef, () => closeDropDown(0));
  useClickOutside(locationRef, () => closeDropDown(1));

  const filteredDiagnosa = ProvidersList.filter((provider) =>
    provider.typeDiagnosa.some((diagnosa) =>
      diagnosa.toLowerCase().includes(diagnosaInput.toLowerCase()),
    ),
  ).slice(0, 2);

  const filteredLocation = ProvidersList.filter((provider) =>
    provider.city.toLowerCase().includes(locationInput.toLowerCase()),
  ).slice(0, 6);

  const handleDiagnosaSelect = (diagnosa: string) => {
    setDiagnosaInput(diagnosa);
    setShowDropdown([false, false]);
  };

  const handleLocationSelect = (provider: ListProviders) => {
    setLocationInput(provider.city);
    setShowDropdown([false, false]);
  };

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const value = event.target.value.trimStart();

    if (type === "diagnosa") {
      setDiagnosaInput(value);
      setShowDropdown([true, false]);
    } else if (type === "location") {
      setLocationInput(value);
      setShowDropdown([false, true]);
    }
  };

  const handleProviderTypeClick = (type: string) => {
    if (selectedProviderType === type) {
      setSelectedProviderType(null);
    } else {
      setSelectedProviderType(type);
    }
  };

  const filterProvider = (providers: ListProviders[]) => {
    let filteredProviders = providers;

    if (diagnosaInput && locationInput) {
      filteredProviders = filteredProviders.filter(
        (provider) =>
          provider.typeDiagnosa.some((diagnosa) =>
            diagnosa.toLowerCase().includes(diagnosaInput.toLowerCase()),
          ) &&
          provider.city.toLowerCase().includes(locationInput.toLowerCase()) &&
          (!selectedProviderType ||
            provider.providersType === selectedProviderType),
      );
    } else if (diagnosaInput) {
      filteredProviders = filteredProviders.filter(
        (provider) =>
          provider.typeDiagnosa.some((diagnosa) =>
            diagnosa.toLowerCase().includes(diagnosaInput.toLowerCase()),
          ) &&
          (!selectedProviderType ||
            provider.providersType === selectedProviderType),
      );
    } else if (locationInput) {
      filteredProviders = filteredProviders.filter(
        (provider) =>
          provider.city.toLowerCase().includes(locationInput.toLowerCase()) &&
          (!selectedProviderType ||
            provider.providersType === selectedProviderType),
      );
    } else if (selectedProviderType) {
      filteredProviders = filteredProviders.filter(
        (provider) => provider.providersType === selectedProviderType,
      );
    }

    return filteredProviders;
  };

  const filteredProviders = filterProvider(ProvidersList);

  const handleOpenModal = (provider: ListProviders) => {
    const modalData: modalPropsProvider = {
      isVisible: true,
      onClose: handleCloseModal,
      headPicture: provider.headPicture,
      city: provider.city,
      country: provider.country,
      descPic: provider.descPic,
      typeDiagnosa: provider.typeDiagnosa,
      providersType: provider.providersType,
      id: provider.id,
    };
    setSelectedProvider(modalData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProvider(null);
  };

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="">
          <div className="flex md:space-x-6 lg:space-x-10">
            <div className="sticky top-10 space-y-5">
              <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                <h3>Search Motor</h3>
                <div>
                  <div
                    className="relative mt-4 flex items-center space-x-3 rounded-md bg-gray-100 p-3"
                    ref={diagnosaRef}
                  >
                    <FaRibbon className="text-[18px] text-gray-400" />
                    <input
                      placeholder="Search Diagnosa"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
                      onChange={(e) => handleSearchChange(e, "diagnosa")}
                      onClick={() => handleClickDropDown(0)}
                      value={diagnosaInput}
                    />
                    {showDropdown[0] && (
                      <div className="absolute left-0 top-10 z-10 w-full rounded-md bg-white shadow-md">
                        {filteredDiagnosa.map((provider) =>
                          provider.typeDiagnosa.map((diagnosa) => (
                            <div
                              key={diagnosa}
                              className="cursor-pointer p-2 hover:bg-gray-200"
                              onClick={() => handleDiagnosaSelect(diagnosa)}
                            >
                              {diagnosa}
                            </div>
                          )),
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    className="relative mt-4 flex items-center space-x-3 rounded-md bg-gray-100 p-3"
                    ref={locationRef}
                  >
                    <GrMap className="text-[18px] text-gray-400" />
                    <input
                      placeholder="Search Location"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
                      onChange={(e) => handleSearchChange(e, "location")}
                      onClick={() => handleClickDropDown(1)}
                      value={locationInput}
                    />
                    {showDropdown[1] && (
                      <div className="absolute left-0 top-10 z-10 w-full rounded-md bg-white shadow-md">
                        {filteredLocation.map((provider) => (
                          <div
                            key={provider.id}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => handleLocationSelect(provider)}
                          >
                            {provider.city}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-auto rounded-md bg-white p-4 md:w-52 lg:w-64">
                <h2 className="font-semibold">List Provider Type</h2>
                <div className="mt-5 space-y-2">
                  {providerTypesArray.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex cursor-pointer items-center space-x-3"
                      onClick={() => handleProviderTypeClick(type)}
                    >
                      {selectedProviderType === type ? (
                        <IoIosRadioButtonOn className="mr-2 text-2xl text-orange-300" />
                      ) : (
                        <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
                      )}
                      <p
                        className={`text-sm ${
                          selectedProviderType === type
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      >
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8">
              {filteredProviders.map((provider) => (
                <div key={provider.id}>
                  <div className="group relative">
                    <Image
                      src={require(
                        `@/assets/images/ListProvider/${provider.headPicture[0]}.png`,
                      )}
                      alt={`${provider.city}-picture`}
                      className="rounded-md"
                      onClick={() => handleOpenModal(provider)}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-black bg-opacity-50 transition-opacity group-hover:flex">
                      <HiMagnifyingGlass
                        className="text-3xl text-white hover:text-4xl"
                        onClick={() => handleOpenModal(provider)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 py-4">
                      <GrMap className="text-[18px] text-orange-400" />
                      <p className="text-sm font-semibold">{provider.city}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {provider.descPic}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedProvider && (
        <Modal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          headPicture={selectedProvider.headPicture}
          city={selectedProvider.city}
          country={selectedProvider.country}
          descPic={selectedProvider.descPic}
          typeDiagnosa={selectedProvider.typeDiagnosa}
          providersType={selectedProvider.providersType}
          id={selectedProvider.id}
        />
      )}
    </div>
  );
};

export default ListProvider;
