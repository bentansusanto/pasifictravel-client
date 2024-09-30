import React from "react";

export const DataPemesanan = () => {
  return (
    <div className="rounded-lg bg-white py-4">
      <form>
        <div className="flex items-center justify-between px-2">
          <h1 className="text-lg font-semibold">Data Pemesanan</h1>
          <button className="text-sm text-orange-400 hover:scale-110 hover:text-orange-500">
            Save
          </button>
        </div>
        <hr className="border-b-1 border-t border-gray-300" />
        <div className="mt-5 items-center space-y-4 px-2">
          <div className="flex justify-between">
            <div>
              <div className="flex">
                <h5 className="py-1 text-gray-400 sm:text-[10px] lg:text-sm">
                  Nama depan dan tengah (jika ada)
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <input
                type="text"
                id="firstName"
                className="mt-1 h-[50px] rounded-md border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                required
              />
              <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                (tanpa gelar dan tanda baca)
              </p>
            </div>
            <div>
              <div className="mt-0 flex">
                <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                  Nama Belakang
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <input
                type="text"
                id="firstName"
                className="mt-1 h-[50px] rounded-md border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                required
              />
              <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                (tanpa gelar dan tanda baca)
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="flex">
                <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                  Email
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <input
                type="text"
                id="firstName"
                className="mt-1 h-[50px] rounded-md border border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:w-[180px] lg:w-[310px]"
                required
              />
              <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                example@example.com
              </p>
            </div>
            <div>
              <div className="flex">
                <h5 className="py-1 text-gray-400 sm:text-[11px] lg:text-sm">
                  No. Handphone
                </h5>
                <span className="text-red-600">*</span>
              </div>
              <div className="mt-1 flex rounded-md">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-xs lg:text-sm">
                  +62
                </span>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="block h-[50px] min-w-1 rounded-none rounded-r-md border border-gray-400 focus:border-indigo-300 focus:ring-indigo-200 sm:w-[130px] lg:w-[260px]"
                  placeholder=""
                />
              </div>
              <p className="pt-3 text-gray-400 sm:text-[11px] lg:text-sm">
                Contoh: +62813456786,
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
