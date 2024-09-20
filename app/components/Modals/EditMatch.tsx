"use client";

import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";

export default function EditTournamentInfo({
  isOpen,
  setter,
}: {
  isOpen: boolean;
  setter: any;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        {/* Modal content */}
        <div className="rounded-lg relative flex flex-col w-full max-w-4xl bg-[#FFFFFF] p-4 gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-bold text-darkerGray select-none">
              Edit Match
            </h5>
            <BsX
              className="text-xl cursor-pointer select-none"
              onClick={setter}
            />
          </div>
          {/* Body */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 border-b border-gray/50 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-[50%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Match No.
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="matchno"
                    type="number"
                    // value={new Date().toISOString().split("T")[0]}
                    title="Enter match number"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Round
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="round"
                    type="text"
                    // value={}
                    title="Enter round"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Surface
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="surface"
                    type="text"
                    // value={new Date().toISOString().split("T")[0]}
                    title="Enter surface"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Score
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="score"
                    type="text"
                    // value={}
                    title="Enter score"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Video Highlight URL
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="url"
                    type="text"
                    // value={}
                    title="Enter video highlight URL"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-b border-gray/50 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-[30%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Winner ID
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnerid"
                    type="text"
                    // value={new Date().toISOString().split("T")[0]}
                    title="Enter winner ID"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Winner Name
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnername"
                    type="text"
                    // value={}
                    title="Enter winner name"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Winner ELO
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnerelo"
                    type="text"
                    // value={}
                    title="Enter winner ELO"
                  />
                </div>
                <div className="w-[15%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Gains
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnerelogains"
                    type="text"
                    // value={}
                    title="Enter winner ELO gains"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Winner Surf. ELO
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnersurfelo"
                    type="text"
                    // value={}
                    title="Enter winner Surf. ELO"
                  />
                </div>
                <div className="w-[15%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Gains
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="winnersurfelogains"
                    type="text"
                    // value={}
                    title="Enter winner surf. ELO gains"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-[30%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Loser ID
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="loserid"
                    type="text"
                    // value={new Date().toISOString().split("T")[0]}
                    title="Enter loser ID"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Loser Name
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="losername"
                    type="text"
                    // value={}
                    title="Enter loser name"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Loser ELO
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="loserelo"
                    type="text"
                    // value={}
                    title="Enter loser ELO"
                  />
                </div>
                <div className="w-[15%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Gains
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="loserelogains"
                    type="text"
                    // value={}
                    title="Enter loser ELO gains"
                  />
                </div>
                <div className="w-full gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Loser Surf. ELO
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="losersurfelo"
                    type="text"
                    // value={}
                    title="Enter loser surf. ELO"
                  />
                </div>
                <div className="w-[15%] gap-1">
                  <label className="font-semibold text-sm text-darkerGray select-none">
                    Gains
                  </label>
                  <input
                    className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                    id="losersurfelogains"
                    type="text"
                    // value={}
                    title="Enter loser surf. ELO gains"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 mt-4">
            <button
              type="button"
              className="py-2 px-6 font-medium text-sm bg-lightGray text-darkerGray rounded-lg hover:bg-[#e0e1e1]"
              onClick={setter}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-6 font-medium text-sm bg-green text-white rounded-lg hover:bg-green/90"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 z-40 bg-[#000000]/30"></div>
    </>
  );
}
