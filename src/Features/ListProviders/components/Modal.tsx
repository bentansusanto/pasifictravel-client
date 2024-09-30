// components/Modal.tsx
import React, { useState, useEffect } from "react";
import { modalPropsProvider } from "@/utils/Modal/modalProps";
import Image from "next/image";
import { fonts } from "@/config/Themes";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrMap } from "react-icons/gr";

const Modal = ({
  isVisible, // Whether the modal is visible
  onClose, // Function to close the modal
  headPicture, // Array of image filenames for the image slider
  city, // City name
  country, // Country name
  descPic, // Description text
  typeDiagnosa, // Type of diagnosis (not used in this example)
  providersType, // Provider type (not used in this example)
  id, // Unique ID for the modal (used as a key)
}: modalPropsProvider) => {
  // State to track the current image index in the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State to track the visibility of the requirements section
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);

  // Effect to set up an interval for automatically changing images
  useEffect(() => {
    if (!isVisible) return; // If the modal is not visible, do nothing

    // Set up an interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === headPicture.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 3000ms = 3 seconds

    // Clean up the interval when the modal is not visible or the component unmounts
    return () => clearInterval(interval);
  }, [isVisible, headPicture.length]); // Dependencies: isVisible and headPicture.length

  // Function to handle clicks on the overlay (background)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose(); // Call the onClose function to close the modal
  };

  // Function to prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Stop the click event from propagating to the overlay
  };

  // Function to toggle the visibility of the requirements section
  const toggleRequirements = () => {
    setIsRequirementsOpen((prev) => !prev); // Toggle the state
  };

  // If the modal is not visible, return null (don't render anything)
  if (!isVisible) return null;

  // Render the modal
  return (
    <div
      key={id}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 ${fonts.className}`}
      onClick={handleOverlayClick} // Handle clicks on the overlay
    >
      <div
        className="relative max-h-[92vh] w-full max-w-sm rounded-lg bg-white"
        onClick={handleModalClick} // Handle clicks inside the modal
      >
        <div className="p-4">
          <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-md">
            <div></div>
            {/* Display the current image in the slider */}
            <Image
              src={require(
                `@/assets/images/ListProvider/${headPicture[currentImageIndex]}.png`,
              )}
              alt={`${city} picture`}
              className="h-[300px] w-[350px] rounded-xl"
            />
            {/* Navigation dots */}
            <div className="absolute bottom-2 flex w-full justify-center">
              {headPicture.map((_, idx) => (
                <div
                  key={idx}
                  className={`mx-1 h-2 w-2 rounded-full ${
                    idx === currentImageIndex ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="hide-scrollbar relative mt-6 max-h-[23vh] overflow-auto">
            <div className="pb-1 pt-2 text-lg font-semibold">
              {headPicture[0]}
            </div>
            <div className="flex space-x-2">
              <GrMap className="text-xs text-orange-400" />
              <h2 className="mb-2 text-xs text-gray-400">
                {city},{country}
              </h2>
            </div>
            <p className="mb-8 text-justify text-[15px] text-gray-400">
              {descPic}
            </p>
            <div className="bg-gray-200">
              {/* Button to toggle the requirements section */}
              <div
                className="mb-2 flex w-full items-center justify-between px-5 pb-1 pt-3 text-sm font-semibold"
                onClick={toggleRequirements}
              >
                Requirements
                {/* Icon to indicate whether the section is open or closed */}
                {isRequirementsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {/* Requirements list (conditionally rendered) */}
              {isRequirementsOpen && (
                <div className="px-6 py-2">
                  <ol className="mx-2.5 list-decimal text-sm text-gray-400">
                    <li>
                      Paspor dengan masa berlaku min. 6 bln terakhir + Paspor
                      Lama (jika ada paspor lama sebelumnya).
                    </li>
                    <li>
                      Paspor dengan masa berlaku min. 6 bln terakhir + Paspor
                      Lama (jika ada paspor lama sebelumnya).
                    </li>
                    <li>
                      Paspor dengan masa berlaku min. 6 bln terakhir + Paspor
                      Lama (jika ada paspor lama sebelumnya).
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <button className="w-[22rem] max-w-lg rounded bg-orange-500 p-4 text-white">
            Apply Ticket Health Tourism
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
