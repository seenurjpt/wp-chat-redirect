"use client";

import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (number: string) => {
    // Remove any non-digit characters
    const cleanNumber = number.replace(/\D/g, "");

    // Check if it's exactly 10 digits
    if (cleanNumber.length !== 10) {
      return false;
    }

    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value === "") {
      setError("");
      setIsValid(false);
      return;
    }

    const isValidNumber = validatePhoneNumber(value);
    setIsValid(isValidNumber);

    if (!isValidNumber) {
      setError("Phone number must be exactly 10 digits");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      setError("Please enter a valid phone number");
      return;
    }

    // Clean the number and create WhatsApp URL
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B91${cleanNumber}&text&type=phone_number&app_absent=0`;

    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className='main-wrapper flex flex-col items-center justify-center gap-6 sm:gap-10 min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200'>
      <Image
        src='/wp-logo.svg'
        width={80}
        height={80}
        className='sm:w-[100px] sm:h-[100px] transform hover:scale-110 transition-transform duration-300 ease-out drop-shadow-lg'
        alt='WhatsApp Logo'
      />

      <div className='bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out border border-white/20 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto font-["SF_Pro_Display",system-ui,-apple-system,BlinkMacSystemFont,"Segoe_UI",Roboto,sans-serif]'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-4 sm:mb-6 text-gray-800 tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
          WhatsApp Chat Redirect
        </h1>

        <form onSubmit={handleSubmit} className='space-y-3 sm:space-y-4'>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm sm:text-base font-medium text-gray-700 mb-2 tracking-tight hover:text-gray-900 transition-colors duration-200'
            >
              Phone Number
            </label>
            <input
              id='phone'
              type='tel'
              name='phone'
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder='Enter 10-digit mobile number'
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-out tracking-tight hover:shadow-md hover:scale-[1.02] ${
                error
                  ? "border-red-500 bg-red-50"
                  : isValid
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              maxLength={15}
            />
            {error && (
              <p className='text-red-500 text-xs sm:text-sm mt-1 tracking-tight animate-pulse'>
                {error}
              </p>
            )}
            {isValid && (
              <p className='text-green-500 text-xs sm:text-sm mt-1 tracking-tight flex items-center gap-1'>
                <span className='animate-bounce'>✓</span> Valid phone number
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={!isValid}
            className={`w-full py-2 sm:py-3 px-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ease-out tracking-tight transform hover:scale-105 active:scale-95 ${
              isValid
                ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white cursor-pointer shadow-lg hover:shadow-xl hover:shadow-green-200"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Go to Chat
          </button>
        </form>

        <div className='mt-4 sm:mt-6 text-center'>
          <p className='text-xs sm:text-sm text-gray-600 tracking-tight hover:text-green-500 transition-colors duration-200'>
            Enter a valid phone number (10 digits)
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className='w-full text-center py-4 sm:py-6'>
        <p className='text-xs sm:text-sm text-green-500 tracking-tight hover:text-green-700 transition-colors duration-200'>
          © 2025 Sunny Rajput. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
