import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import ListProvider from "./components/ListProvider";

const ProvidersList = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="mt-20 md:px-8 lg:px-24">
          <div className="mb-5 space-y-3">
            <h1 className="text-2xl font-semibold">Meet Verified Providers</h1>
            <p className="text-[15px] text-gray-400 md:w-[45%] lg:w-[35%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <ListProvider />
        </div>
      )}
    </div>
  );
};

export default ProvidersList;
