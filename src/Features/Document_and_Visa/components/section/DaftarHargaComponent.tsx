import { PriceList } from "@/pages/document_and_visa/logic";

const DaftarHargaComponent = () => {
  const totalSub = PriceList[0].pricePerPerson * PriceList[0].tourists;

  return (
    <div>
      <hr className="border-t border-gray-300" />
      <h3 className="pt-5 text-[15px] font-semibold"> Detail Harga</h3>
      <div className="pb-4 text-sm">
        <div className="flex justify-between py-4">
          <h6 className="text-gray-400">Tourist</h6>
          <p className="text-black">
            {PriceList[0].tourists.toLocaleString("id-ID")} persons
          </p>
        </div>
        <div className="flex justify-between">
          <h6 className="text-gray-400">Price</h6>
          <p className="text-black">
            IDR {PriceList[0].pricePerPerson.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <hr className="border-b-2 border-t border-gray-300" />
      <div className="flex justify-between py-3 text-sm font-semibold">
        <div>SubTotal</div>
        <p>IDR {totalSub.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
};

export default DaftarHargaComponent;
