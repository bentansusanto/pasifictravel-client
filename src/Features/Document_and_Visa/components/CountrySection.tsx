import { useState } from "react";
import Modal from "../components/Modal";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import Image from "next/image";
import { ListCountry } from "@/pages/document_and_visa/logic";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { truncateText } from "./Logic/TruncatedText";
import Link from "next/link";

const CountrySection = () => {
  const { isMobile } = Mobile();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setActiveModalId(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setActiveModalId(null);
  };
  const handleOpenModal = (id: number) => () => openModal(id);

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        // countries
        <div className="pt-16">
          <div className="flex justify-between py-7">
            <div className="w-[350px]">
              <h4 className="text-sm font-bold text-orange-400">Countries</h4>
              <h2 className="text-xl font-bold">
                World’s Best Visas Requested Countries
              </h2>
            </div>
            <Link href="/ListcountryFilter">
              <button className="mt-9 flex items-center rounded-lg border-2 bg-gray-200 text-xs text-gray-500 transition duration-300 hover:bg-gray-600 hover:text-white">
                Show More
              </button>
            </Link>
          </div>
          <div className="mt-10 flex gap-5">
            {ListCountry.slice(0, 4).map((list, idx) => (
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
                    <p className="text-sm font-semibold">{list.FlagName}</p>
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
                  ListCountry.find((country) => country.id === activeModalId)
                    ?.FlagName || ""
                }
                NameFlag={
                  ListCountry.find((country) => country.id === activeModalId)
                    ?.headPicture || ""
                }
                descWords={
                  ListCountry.find((country) => country.id === activeModalId)
                    ?.DescWord || ""
                }
                capital_City={
                  ListCountry.find((country) => country.id === activeModalId)
                    ?.Capital_City || ""
                }
                id={activeModalId}
                Tiype_ViPa={"string"}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySection;
