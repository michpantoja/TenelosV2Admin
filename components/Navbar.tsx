"use client"

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import Select, { ControlProps, GroupBase, components } from "react-select";

export default function Navbar() {
  const CustomControl = (
    props: React.JSX.IntrinsicAttributes &
      ControlProps<unknown, boolean, GroupBase<unknown>>
  ) => {
    return (
      <components.Control {...props}>
        <IoSearch color="#444444" />
        {props.children}
      </components.Control>
    );
  };
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <Image
        src="/assets/tenelos_logo.png"
        alt="Tenelos"
        width={100}
        height={100}
      />
      <Select
        className="w-[250px] font-semibold text-base select-none outline-none"
        isSearchable={true}
        isClearable={true}
        // options={players}
        placeholder="Search player"
        components={{
          Control: CustomControl,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            padding: "2px 4px",
            paddingLeft: "8px",
            cursor: "pointer",
            borderRadius: "8px",
            outline: "none",
          }),
          option: (provided) => ({
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
            color: "#444444",
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
    </div>
  );
}
