'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import SideBg from '@public/assets/signUp-bg.svg'; // Keep it as SVG or change to a supported format
import { AuthContext } from '@/app/store/Context';

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState({ number: '' });
  const [loading, setLoading] = useState(false);
  const { email, isRegistered, updateRegistrationStatus } =
    useContext(AuthContext);

  useEffect(() => {
    if (!isRegistered) {
      router.replace('/register');
    } else {
      toast.success('OTP sent to your email');
    }
  }, [isRegistered]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [userError, setUserError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!input.number) {
      toast.error('Please enter the verification code');
      return;
    }

    setLoading(true); // Set loading state

    try {
      const dataToSend = {
        email: email,
        pinCode: input.number,
      };

      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/auth/otpCode-complete`,
        dataToSend
      );

      if (response.data.success === false) {
        setUserError('Invalid verification code');
        setLoading(false);
        return;
      }

      toast.success('Verification successful!');
      setInput({ number: '' });
      updateRegistrationStatus(true);
      router.replace('/register/partner-detail');
    } catch (error) {
      setUserError('An error occurred while verifying the code.');
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
      toast.error('Verification failed');
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 gap-4 mx-auto my-10 lg:grid-cols-2 lg:gap-8 lg:mx-28">
        <Toaster />
        {/* Image-Section */}
        <div className="hidden lg:block xl:block">
          <Image src={SideBg} alt="side_bg" />
        </div>

        {/* Form-Section */}
        <div className="mx-auto">
          <form
            className="w-full p-8 bg-white border border-blue-400 rounded-lg shadow-lg py-7 md:w-96 lg:w-96"
            onSubmit={handleSubmit}
          >
            <h1 className="flex items-center justify-center font-sans text-2xl font-bold text-blue-500">
              Email Verification
            </h1>

            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="login"
              >
                E-mail Verification
              </label>

              <input
                value={input.number}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Enter Verification Code"
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
              />
            </div>

            {userError && (
              <div className="text-red-500 text-sm mt-2">{userError}</div> // Display error if any
            )}

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md transition-all mt-3 ${
                loading && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={loading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
