// components/RadioButtonComponent.tsx
import React from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useRadioButtons } from "./logic/useRadioButtons";

const RadioButtonComponent: React.FC = () => {
  const { selectedValue, handleChange } = useRadioButtons();

  return (
    <div className="py-3">
      <div className="mb-4 grid grid-cols-2 gap-4">
        {/* Radio button untuk opsi 1 */}
        <div
          className="flex cursor-pointer items-center"
          onClick={() => handleChange({ target: { value: "option1" } } as any)}
        >
          {selectedValue === "option1" ? (
            <IoIosRadioButtonOn className="mr-2 text-xl text-orange-300" />
          ) : (
            <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
          )}
          <label
            htmlFor="option1"
            className={`cursor-pointer ${selectedValue === "option1" ? "text-gray-400" : "text-gray-400"}`}
          >
            Pasport biasa
          </label>
        </div>
        {/* Radio button untuk opsi 2 */}
        <div
          className="flex cursor-pointer items-center"
          onClick={() => handleChange({ target: { value: "option2" } } as any)}
        >
          {selectedValue === "option2" ? (
            <IoIosRadioButtonOn className="mr-2 text-xl text-orange-300" />
          ) : (
            <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
          )}
          <label
            htmlFor="option2"
            className={`cursor-pointer ${selectedValue === "option2" ? "text-gray-400" : "text-gray-400"}`}
          >
            Pasport biasa elektronik
          </label>
        </div>
        {/* Radio button untuk opsi 3 */}
        <div
          className="flex cursor-pointer items-center"
          onClick={() => handleChange({ target: { value: "option3" } } as any)}
        >
          {selectedValue === "option3" ? (
            <IoIosRadioButtonOn className="mr-2 text-xl text-orange-300" />
          ) : (
            <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
          )}
          <label
            htmlFor="option3"
            className={`cursor-pointer ${selectedValue === "option3" ? "text-gray-400" : "text-gray-400"}`}
          >
            Pasport biasa kilat
          </label>
        </div>
        {/* Radio button untuk opsi 4 */}
        <div
          className="flex cursor-pointer items-center"
          onClick={() => handleChange({ target: { value: "option4" } } as any)}
        >
          {selectedValue === "option4" ? (
            <IoIosRadioButtonOn className="mr-2 text-xl text-orange-300" />
          ) : (
            <IoIosRadioButtonOff className="mr-2 text-xl text-gray-400" />
          )}
          <label
            htmlFor="option4"
            className={`cursor-pointer ${selectedValue === "option4" ? "text-gray-400" : "text-gray-400"}`}
          >
            Pasport elektronik kilat
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonComponent;
