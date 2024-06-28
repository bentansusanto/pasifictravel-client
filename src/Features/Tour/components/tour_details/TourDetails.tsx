import { Mobile } from "@/config/MediaQuery";
import { fonts } from "@/config/Themes";
import { useState } from "react";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { listDataTours } from "@/pages/Tour/index";
import Image from "next/image";
import { GrMap } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { PiFlagPennant } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { dollar } from "@/config/Currency";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar, FaChevronRight } from "react-icons/fa";
import Head from "next/head";
import { GoTriangleRight } from "react-icons/go";

const TourPage = () => {
  const { isMobile } = Mobile();

  const [bookingInfo, setBookingInfo] = useState({
    startDate: "2 Mei 2024",
    endDate: "7 Mei 2024",
    persons: 2,
    subtotal: 1000,
    tax: 8,
    totalPrice: 1008,
  });

  return (
    <div className={`${fonts.className}`}>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="mt-20 md:px-8 lg:px-24">
          <div>
            <div className="flex">
              <div className="pb-6 md:w-3/4">
                <Image
                  src={require(
                    `@/assets/images/Tour/${listDataTours[0].thumbnail}`,
                  )}
                  alt="Hot Air Balloon in Capadocia"
                  width={900}
                  height={550}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/4">
                {listDataTours.slice(0, 3).map((list, idx) => (
                  <div>
                    <div className="pb-5 pl-4">
                      <Image
                        src={require(
                          `@/assets/images/Tour/${listDataTours[0].thumbnail}`,
                        )}
                        alt="Hot Air Balloon in Capadocia"
                        width={400}
                        className="h-[140px] rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                {/* Atraction */}
                <div className="pb-5">
                  <div>
                    <p className="text-xs text-gray-500">{`${listDataTours[0].category}`}</p>
                    <h4 className="my-5 text-[22px] font-bold">
                      Air Balloon Capadocia and Sanfranbolu Turkey
                    </h4>
                  </div>
                  <div className="my-3 flex gap-9">
                    <div className="flex items-center space-x-2">
                      <GrMap className="text-sm text-orange-400" />
                      <p className="text-sm text-gray-400">
                        {listDataTours[0].location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IoStar className="text-sm text-orange-400" />
                      <p className="text-sm font-bold">
                        {listDataTours[0].rating}
                      </p>
                      <span className="ml-2 text-sm text-gray-500">
                        (20 reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="w-[600px] text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* detail tour */}
                <div className="my-12">
                  <h2 className="my-4 text-[19px] font-bold">Detail Tour</h2>
                  <div className="flex gap-5">
                    <div className="flex items-center space-x-2">
                      <CiMap className="text-sm text-gray-600" />
                      <p className="text-sm text-gray-600">1 Negara</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SlCalender className="text-sm text-gray-600" />
                      <p className="text-sm text-gray-600">1 Days</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PiFlagPennant className="text-sm text-gray-600" />
                      <p className="text-sm text-gray-600">5 Keberangkatan</p>
                    </div>
                  </div>
                </div>

                {/* Benefit tour */}
                <div className="my-8">
                  <h2 className="my-7 text-[19px] font-bold">Benefits.</h2>
                  <div className="">
                    <div className="my-6 flex items-center space-x-2">
                      <FaCircleCheck className="mx-2 text-lg text-green-500" />
                      <p className="text-sm text-gray-600">
                        Fully escorted by an English speaking tour guide.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCircleCheck className="mx-2 text-lg text-green-500" />
                      <p className="text-sm text-gray-600">
                        Transportation by air conditioned vehicles.
                        
                      </p>
                    </div>
                  </div>
                </div>
                {/* Itinerary Tour */}
                <div className="py-8">
                  <h2 className="my-4 text-[19px] font-bold">Itinerary Tour</h2>
                  <div className="space-y-4">
                    {/* ini nomor1 */}
                    <div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                          <span className="text-[18px] text-gray-400">1</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-[18px] font-semibold">
                            Berkumpul di Jakarta
                          </h3>
                        </div>
                      </div>
                      {/* untuk buat border garis-- */}
                      <div className="relative my-5 ml-4">
                        <div className="absolute h-full transform border-r-[3px] border-dashed border-gray-400"></div>
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="pl-8 text-left">
                              <p className="text-[14px] text-gray-500">
                                2 Mei 2024
                              </p>
                              <p className="mt-2 w-[450px] text-[14px] text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* akhir border untuk no1 */}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                          <span className="text-[18px] text-gray-400">2</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-[15px] font-semibold">
                            Berangkat ke lokasi balon udara capadocia
                          </h3>
                        </div>
                      </div>
                      {/* untuk buat border garis-- */}
                      <div className="relative my-5 ml-4">
                        <div className="absolute h-full transform border-r-[3px] border-dashed border-gray-400"></div>
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="pl-8 text-left">
                              <p className="text-[14px] text-gray-500">
                                2 Mei 2024
                              </p>
                              <p className="mt-2 w-[450px] text-[14px] text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* akhir border untuk no2 */}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                          <span className="text-[18px] text-gray-400">3</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-[15px] font-semibold">
                            Berangkat ke Istanbul
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="flex items-center justify-center font-semibold text-orange-500"
                    >
                      Lihat Selengkapnya
                      <GoTriangleRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:ml-4 md:mt-0 md:w-1/3">
                <div className="rounded-lg border p-5 shadow-lg">
                  <div className="">
                    <h2 className="mb-4 text-xl font-semibold">Booking Info</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow-sm">
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-gray-500" />
                          <span className="text-gray-700">
                            2 Mei 2024 - 7 Mei 2024
                          </span>
                        </div>
                        <VscTriangleDown className="text-gray-500" />
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow-sm">
                        <div className="flex items-center space-x-2">
                          <FaUser className="text-gray-500" />
                          <span className="text-gray-700">2 Person</span>
                        </div>
                        <VscTriangleDown className="text-gray-500" />
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] text-gray-500">Subtotal</p>
                        <div className="text-[16px]">{dollar(1000)}</div>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] text-gray-500">Tax</p>
                        <div className="text-[16px]">{dollar(8)}</div>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] text-gray-500">Total Price</p>
                        <div className="text-[18px] font-bold">
                          {dollar(1008)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-5">
                    <button className="mt-4 flex w-full items-center rounded-lg border-2 border-orange-500 py-2 text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white">
                      <FaRegBookmark className="mr-2" />
                      Save Ticket
                    </button>
                    <button className="mt-4 w-full rounded-lg bg-orange-500 py-2 text-white">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border p-4 shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Customer Review</h2>
                    <a href="#" className="flex items-center text-orange-500">
                      Lihat Semua <FaChevronRight className="ml-1" />
                    </a>
                  </div>
                  <div className="mb-4 flex justify-between">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex flex-col items-center">
                        <div
                          className={`flex items-center gap-3 rounded p-2 ${rating === 5 ? "bg-orange-200" : "bg-gray-100"}`}
                        >
                          <FaStar
                            className={`text-${rating === 5 ? "orange" : "orange"}-500`}
                          />
                          <span>{rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4 rounded-lg bg-gray-100 p-4">
                    <div className="mb-2 flex items-center">
                      <FaStar className="text-orange-500" />
                      <span className="ml-2 font-semibold">5</span>
                      <span className="ml-auto text-gray-500">Ardiansyah</span>
                    </div>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-300"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* akhir */}
                {/* Important Information */}
                <div className="mx-auto my-5 max-w-xl rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-4 text-lg font-semibold">
                    Important Information
                  </h2>
                  <ul className="list-none space-y-4 text-sm text-gray-500">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1 text-justify ">
                        Cancellation can be done a night before for half day
                        morning and full day tours in Istanbul and 4 hours prior
                        to afternoon tour to avoid penalty, otherwise full tour
                        rate will be charged.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1 text-justify">
                        Children 11 and younger receive 50% discount.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPage;
