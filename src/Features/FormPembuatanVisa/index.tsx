import { DataPemesanan } from "./components/DataPemesanan";
import DataPerson from "./components/DataPerson";
import PassportCard from "./components/PassportCard";
import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import RefundPolicyCard from "./components/RefundPolicyCard";

const FormVisaPasport = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${fonts.className} ${!isMobile && "my-28 md:mx-12 lg:mx-24"}`}
    >
      {isMobile ? (
        <div></div>
      ) : (
        <div className="flex items-start gap-9">
          <div className="space-y-9">
            <DataPemesanan />
            <DataPerson />
          </div>
          <div className="space-y-9">
            <PassportCard />
            <RefundPolicyCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormVisaPasport;
