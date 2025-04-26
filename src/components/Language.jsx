import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import i18n from "../i18n";

const Language = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["English", "नेपाली"];
  const savedLng = localStorage.getItem("i18nextLng" || "English");

  const handleOptionClick = (lng) => {
    setSelectedOption(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <div className="select-wrapper">
      <div className="select">
        {selectedOption || savedLng} <MdOutlineArrowDropDown />
      </div>
      <div className="select-options">
        {options.map((lng, index) => (
          <div
            className="select-option"
            key={index}
            onClick={() => handleOptionClick(lng)}
          >
            {lng}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
