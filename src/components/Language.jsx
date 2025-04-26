import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import i18n from "../i18n";

const Language = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["en", "नेपाली"];

  const handleOptionClick = (lng) => {
    setSelectedOption(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };
  const savedLng = localStorage.getItem("i18nextLng");

  return (
    <div className="select-wrapper">
      <div className="select">
        {savedLng || selectedOption} <MdOutlineArrowDropDown />
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
