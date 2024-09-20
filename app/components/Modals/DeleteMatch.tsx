"use client";

import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";

export default function DeleteMatch({
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
              Delete Match
            </h5>
            <BsX
              className="text-xl cursor-pointer select-none"
              onClick={setter}
            />
          </div>
          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-sm text-darkerGray select-none">
              Are you sure you want to delete this match?
            </p>
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
              className="py-2 px-6 font-medium text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 z-40 bg-[#000000]/30"></div>
    </>
  );
}
