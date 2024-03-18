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
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Modal content */}
        <div className="rounded-lg relative flex flex-col w-full max-w-lg bg-[#FFFFFF] p-4 gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-bold text-darkerGray select-none">
              Edit Tournament Info
            </h5>
            <BsX
              className="text-xl cursor-pointer select-none"
              onClick={setter}
            />
          </div>
          {/* Body */}
          <div className="flex flex-col gap-4">
            <div className="gap-1">
              <label className="font-semibold text-sm text-darkerGray select-none">
                Tournament Date
              </label>
              <input
                className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                id="date"
                type="date"
                value={new Date().toISOString().split("T")[0]} // change this to the date you want to edit
                title="Enter tournament date"
              />
            </div>
            <div className="gap-1">
              <label className="font-semibold text-sm text-darkerGray select-none">
                Tournament Name
              </label>
              <input
                className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
                id="name"
                type="text"
                // value={} // change this to the name you want to edit
                title="Enter tournament name"
              />
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
