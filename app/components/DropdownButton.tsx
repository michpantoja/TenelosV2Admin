"use client";

import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Select from "react-select";

export default function DropdownButton({
  options,
  onChange,
}: {
  options: any[];
  onChange: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-fit relative">
      <Select
        className="font-semibold text-base select-none outline-none"
        defaultValue={options[0]}
        isSearchable={false}
        options={options}
        onChange={(e) => onChange(e.value)}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        styles={{
          indicatorsContainer: (base: any) => ({
            ...base,
            display: "none",
          }),
          control: (provided: any) => ({
            ...provided,
            padding: "4px 14px 4px 0px",
            border: "2px solid gray",
            cursor: "pointer",
            marginRight: "1px",
            borderRadius: "8px",
            outline: "none",
          }),
          option: (provided, state) => ({
            ...provided,
            ":hover": {
              backgroundColor: "#F5F6F6",
              color: "#878787",
            },
            cursor: "pointer",
            color: "#878787",
            fontSize: "14px",
            fontWeight: "500",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "gray",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "none",
          },
        })}
      />
      <div className="absolute inset-y-0 right-1.5 flex items-center pointer-events-none">
        <IoChevronDownOutline
          color="green"
          size={16}
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
