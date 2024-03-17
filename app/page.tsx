"use client";

import React from "react";
import Image from "next/image";

export default function Signin() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-4 bg-lightGray">
      <div className="flex flex-col justify-center items-center w-full max-w-md px-0 sm:px-8 py-0 sm:py-8 rounded-lg bg-transparent ">
        <Image
          src="/assets/tenelos_logo.png"
          alt="Tenelos"
          width={150}
          height={150}
        />
        <h3 className="font-semibold text-2xl text-darkerGray text-center my-8">
          Sign In
        </h3>
        <div className="w-full flex flex-col gap-2 mb-4">
          <div className="gap-1">
            <label className="font-semibold text-sm lg:text-base text-darkerGray">
              Email Address
            </label>
            <input
              className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm lg:text-base py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
              id="email"
              type="text"
              title="Enter your email address"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <div className="gap-1">
            <label className="font-semibold text-sm lg:text-base text-darkerGray">
              Password
            </label>
            <input
              className="bg-transparent appearance-none block w-full text-gray border border-gray rounded-lg font-medium text-sm lg:text-base py-2 px-4 focus:outline-gray focus:text-darkerGray text-inherit"
              id="password"
              type="password"
              title="Password must contain at least 8 characters, including UPPER/lowercase and numbers."
            />
          </div>
        </div>
        <button
          type={"submit"}
          className="w-full flex justify-center items-center mb-4 py-2 px-6 font-medium text-sm lg:text-base bg-green text-white rounded-lg hover:bg-green/90"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
