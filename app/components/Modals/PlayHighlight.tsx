"use client";

import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";

export default function PlayHighlight({
  isOpen,
  setter,
  embedId,
}: {
  isOpen: boolean;
  setter: any;
  embedId: string;
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
        <div className="rounded-lg relative flex flex-col w-full max-w-4xl bg-[#FFFFFF] p-4 gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-bold text-darkerGray select-none">
              Video Highlight
            </h5>
            <BsX
              className="text-xl cursor-pointer select-none"
              onClick={() => setter(false)}
            />
          </div>
          {/* Body */}
          <div className="flex-auto">
            <iframe
              className="w-full h-96"
              src={"https://www.youtube.com/embed/" + embedId.trim().slice(-11)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Embedded youtube"
            ></iframe>
          </div>
          <div className="flex items-center justify-end gap-4 mt-4">
            {/* <button
              type="button"
              className="py-2 px-6 font-medium text-sm bg-lightGray text-darkerGray rounded-lg hover:bg-[#e0e1e1]"
              onClick={setter}
            >
              Cancel
            </button> */}
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
      <div className="fixed inset-0 z-40 bg-[#000000]/10"></div>
    </>
  );
}
