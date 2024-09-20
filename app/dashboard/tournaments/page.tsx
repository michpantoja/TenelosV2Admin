"use client";

import DropdownButton from "@/app/components/DropdownButton";
import DeleteTournamentInfo from "@/app/components/Modals/DeleteTournamentInfo";
import EditTournamentInfo from "@/app/components/Modals/EditTournamentInfo";
import Pagination from "@/app/components/Pagination";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { LuPencil, LuTrash2 } from "react-icons/lu";

export default function Tournaments() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage, setDataPerPage] = useState(20);

  const tableHead = ["Date", "ID", "Tournament", "Surface", ""];

  const tableRows = [
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament1",
    },
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Grass",
      tournamentId: "/tournament2",
    },
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament3",
    },
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament4",
    },
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Clay",
      tournamentId: "/tournament5",
    },
    {
      date: "2022-05",
      id: "2024-BNP Paribas Open",
      tournament: "Australian Open",
      surface: "Hard",
      tournamentId: "/tournament6",
    },
  ];

  const handleYearChange = (newYearChange: number) => {
    // setDataPerPage(newYearChange);
    setCurrentPage(1);
  };

  //Get index of the last Data
  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = tableRows.slice(indexOfFirstData, indexOfLastData);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <EditTournamentInfo
        isOpen={isEditModalOpen}
        setter={() => setIsEditModalOpen(false)}
      />
      <DeleteTournamentInfo
        isOpen={isDeleteModalOpen}
        setter={() => setIsDeleteModalOpen(false)}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl">Tournaments Records</h1>
        <div className="flex flex-col">
          <div className="flex flex-col pb-2.5 gap-2.5">
            <div className="w-full flex flex-wrap gap-1 sm:gap-2.5">
              <DropdownButton
                options={[
                  { value: "2024", label: "2024" },
                  { value: "2023", label: "2023" },
                  { value: "2022", label: "2022" },
                  { value: "2021", label: "2021" },
                  { value: "2020", label: "2020" },
                ]}
                onChange={handleYearChange}
              />
            </div>
          </div>
          <div className="overflow-auto min-h-[439px] max-h-[439px]">
            <table className="mt-2.5 w-full min-w-min table-auto text-left">
              <thead>
                <tr className="border-b-2 border-b-gray">
                  {tableHead.map((head, index) => (
                    <th key={index} className="p-2">
                      <div
                        className="w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray cursor-pointer select-none"
                        onClick={() => setIsFiltered(!isFiltered)}
                      >
                        {head}
                        {index !== tableHead.length - 1 && (
                          <IoChevronDownOutline
                            color="green"
                            className={`transition-transform duration-300 ease-in-out ${
                              isFiltered ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData?.map(
                  ({ date, id, tournament, surface, tournamentId }, index) => {
                    const isLast = index === tableRows.length - 0;
                    const classes = isLast
                      ? "p-2"
                      : "p-2 border-b-2 border-lightGray";
                    const bgColor =
                      surface === "Hard"
                        ? "bg-hard"
                        : surface === "Grass"
                        ? "bg-grass"
                        : surface === "Clay"
                        ? "bg-clay"
                        : "";

                    return (
                      <tr key={date}>
                        <td className={`w-fit md:w-[100px] ${classes}`}>
                          <p className="font-semibold text-sm select-none text-darkerGray">
                            {date}
                          </p>
                        </td>
                        <td className={`w-fit md:w-[500px] ${classes}`}>
                          <p className="font-semibold text-sm select-none text-darkerGray ">
                            {id}
                          </p>
                        </td>
                        <td className={`w-fit md:w-[500px] ${classes}`}>
                          <p className="font-semibold text-sm select-none text-darkerGray ">
                            {tournament}
                          </p>
                        </td>
                        <td className={`w-fit md:w-[120px] ${classes}`}>
                          <p
                            className={`font-semibold text-sm select-none text-[#FFFFFF] ${bgColor} px-4 py-1 rounded-full text-center w-16`}
                          >
                            {surface}
                          </p>
                        </td>
                        <td className={`w-fit md:w-[90px] ${classes}`}>
                          <Link
                            href={`/tournaments/${tournamentId}`}
                            className="w-fit border-2 border-gray hover:bg-green/10 hover:border-green hover:text-green px-4 py-1 text-center rounded-lg font-semibold text-sm select-none text-gray uppercase cursor-pointer"
                          >
                            Results
                          </Link>
                        </td>
                        <td
                          className={`w-fit md:w-[90px] flex items-center gap-2 ${classes}`}
                        >
                          <LuPencil
                            className="w-4 h-4 text-darkerGray cursor-pointer hover:text-green transition-colors duration-300 ease-in-out"
                            onClick={() => setIsEditModalOpen(true)}
                          />
                          <LuTrash2
                            className="w-4 h-4 text-darkerGray cursor-pointer hover:text-red-600 transition-colors duration-300 ease-in-out"
                            onClick={() => setIsDeleteModalOpen(true)}
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            dataPerPage={DataPerPage}
            totalData={tableRows.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
