import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Language = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["English", "नेपाली"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="select-wrapper">
      <div className="select">
        {selectedOption || "Language"} <MdOutlineArrowDropDown />
      </div>
      <div className="select-options">
        {options.map((option, index) => (
          <div
            className="select-option"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
