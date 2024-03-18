"use client";

import DeleteMatch from "@/components/Modals/DeleteMatch";
import EditMatch from "@/components/Modals/EditMatch";
import PlayHighlight from "@/components/Modals/PlayHighlight";
import Link from "next/link";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { IoChevronBack, IoVideocamOutline } from "react-icons/io5";
import { LuPencil, LuTrash2 } from "react-icons/lu";

export default function Tournament() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  const tableHead = [
    "Match No.",
    "Round",
    "",
    "Winner Name",
    "Winner ELO",
    "Surf. ELO",
    "Loser Name",
    "Loser ELO",
    "Surf. ELO",
    "Score",
    "",
  ];

  const tableRows = [
    {
      matchNo: "92",
      round: "F",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
    {
      matchNo: "92",
      round: "SF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
    {
      matchNo: "92",
      round: "SF",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
    {
      matchNo: "92",
      round: "Q",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
    {
      matchNo: "92",
      round: "Q",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
    {
      matchNo: "92",
      round: "F",
      embedId: "https://www.youtube.com/watch?v=NwcjE6hhc-c",
      winnerCountry: "US",
      winnerName: "Novak Djokovic",
      winnerElo: "3093",
      winnerSurfElo: "3092",
      loserCountry: "ES",
      loserName: "Rafael Nadal",
      loserElo: "3093",
      loserSurfElo: "3092",
      score: "6-2 4-6 6-2 7-6(4)",
      surface: "Hard",
    },
  ];

  // Sort table rows by round
  tableRows.sort((a, b) => a.round.localeCompare(b.round));

  return (
    <>
      <EditMatch
        isOpen={isEditModalOpen}
        setter={() => setIsEditModalOpen(false)}
      />
      <DeleteMatch
        isOpen={isDeleteModalOpen}
        setter={() => setIsDeleteModalOpen(false)}
      />
      <div className="flex flex-col gap-2">
        <Link href="/tournaments">
          <IoChevronBack size={20} className="cursor-pointer" />
        </Link>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-semibold text-darkerGray">
            Tournament Name
          </h1>
          <p className="text-sm font-semibold text-darkerGray">
            ID: <span>Tournament ID</span>
          </p>
          <p className="text-sm font-semibold text-darkerGray">
            Date: <span>Tournament Date</span>
          </p>
        </div>
        <div className="overflow-auto min-h-[476px] max-h-[476px]">
          <table className="mt-2.5 w-full min-w-min table-auto text-left">
            <thead>
              <tr className="border-b-2 border-b-gray">
                {tableHead.map((head, index) => (
                  <th key={index} className="p-2">
                    <div className="w-full flex justify-between items-center gap-0.5 xs:gap-1 text-xs text-darkGray select-none">
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows?.map(
                (
                  {
                    matchNo,
                    round,
                    winnerCountry,
                    winnerName,
                    winnerElo,
                    winnerSurfElo,
                    loserCountry,
                    loserName,
                    loserElo,
                    loserSurfElo,
                    score,
                    surface,
                    embedId,
                  },
                  index
                ) => {
                  const isLast = index === tableRows.length - 0;
                  const classes = isLast ? "p-2" : "p-2 border-b border-gray";
                  const bgColor =
                    surface === "Hard"
                      ? "bg-hard"
                      : surface === "Grass"
                      ? "bg-grass"
                      : surface === "Clay"
                      ? "bg-clay"
                      : "";

                  return (
                    <tr
                      key={`${round}-${index}`}
                      className={
                        index < tableRows.length - 1 &&
                        round !== tableRows[index + 1].round
                          ? "border-b border-gray"
                          : ""
                      }
                    >
                      <td className={`p-2`}>
                        <p className="font-bold text-sm select-none text-darkerGray">
                          {matchNo}
                        </p>
                      </td>
                      <td className={`p-2`}>
                        <p className="font-bold text-sm select-none text-darkerGray">
                          {round}
                        </p>
                      </td>
                      <td className={`p-2`}>
                        <div className="font-semibold text-sm select-none cursor-pointer">
                          <a onClick={() => setShowHighlight(true)}>
                            <IoVideocamOutline color="green" size={18} />
                          </a>
                          <PlayHighlight
                            isOpen={showHighlight}
                            setter={() => setShowHighlight(false)}
                            embedId={embedId ?? ""}
                          />
                        </div>
                      </td>
                      <td className={`p-2 w-[250px]`}>
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                          <ReactCountryFlag
                            countryCode={winnerCountry}
                            style={{
                              // filter: "drop-shadow(0 0 0.12rem black)",
                              userSelect: "none",
                            }}
                            svg
                          />
                          <Link
                            href={"/players/winner_player_id"}
                            className="font-semibold text-sm select-none text-green hover:underline cursor-pointer"
                          >
                            {winnerName}
                          </Link>
                        </div>
                      </td>
                      <td className={`p-2`}>
                        <p className="font-bold text-sm select-none text-darkerGray">
                          {winnerElo}
                        </p>
                      </td>
                      <td className={`p-2`}>
                        <p
                          className={`font-semibold text-sm select-none text-[#FFFFFF] ${bgColor} px-4 py-1 rounded-full text-center w-16`}
                        >
                          {winnerSurfElo}
                        </p>
                      </td>
                      <td className={`p-2 w-[250px]`}>
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                          <ReactCountryFlag
                            countryCode={loserCountry}
                            style={{
                              // filter: "drop-shadow(0 0 0.12rem black)",
                              userSelect: "none",
                            }}
                            svg
                          />
                          <Link
                            href={"/players/loser_player_id"}
                            className="font-semibold text-sm select-none text-green hover:underline cursor-pointer"
                          >
                            {loserName}
                          </Link>
                        </div>
                      </td>
                      <td className={`p-2`}>
                        <p className="font-bold text-sm select-none text-darkerGray">
                          {loserElo}
                        </p>
                      </td>
                      <td className={`p-2`}>
                        <p
                          className={`font-semibold text-sm select-none text-[#FFFFFF] ${bgColor} px-4 py-1 rounded-full text-center w-16`}
                        >
                          {loserSurfElo}
                        </p>
                      </td>
                      <td className={`p-2 w-[150px]`}>
                        <p className="font-semibold text-sm select-none text-darkerGray">
                          {score}
                        </p>
                      </td>
                      <td
                        className={` h-[60px] xl:h-[52px] flex items-center gap-2`}
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
      </div>
    </>
  );
}
