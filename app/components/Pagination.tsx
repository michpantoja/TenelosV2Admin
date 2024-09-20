import React, { useState } from "react";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";

export default function Pagination({
  dataPerPage,
  totalData,
  paginate,
}: {
  dataPerPage: number;
  totalData: number;
  paginate: (number: number) => void;
}) {
  const totalPages = Math.ceil(totalData / dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    paginate(pageNumber);
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(currentPage + 2, totalPages);
      i++
    ) {
      pages.push(
        <li
          key={i}
          className={`font-semibold text-xs rounded-lg p-2 select-none cursor-pointer ${
            currentPage === i ? "bg-green text-[#FFFFFF]" : "text-darkerGray"
          }`}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap max-sm:gap-2 justify-between items-center mt-2.5">
      <ul className="flex gap-4">
        <li
          className={`font-semibold text-xs rounded-lg p-2 select-none ${
            currentPage > 1
              ? "cursor-pointer text-darkerGray"
              : "cursor-not-allowed text-gray"
          }`}
          onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
        >
          <LuMoveLeft size={12} className="inline-flex mr-2" />
          Previous
        </li>

        {renderPageNumbers()}

        <li
          className={`font-semibold text-xs rounded-lg p-2 select-none ${
            currentPage < totalPages
              ? "cursor-pointer text-darkerGray"
              : "cursor-not-allowed text-gray"
          }`}
          onClick={() =>
            currentPage < totalPages && handleClick(currentPage + 1)
          }
        >
          Next
          <LuMoveRight size={12} className="inline-flex ml-2" />
        </li>
      </ul>
      <p className="font-medium text-sm text-darkerGray select-none">
        Showing {Math.min(dataPerPage * currentPage, totalData)} out of {" "}
        {totalData} results.
      </p>
    </div>
  );
}
