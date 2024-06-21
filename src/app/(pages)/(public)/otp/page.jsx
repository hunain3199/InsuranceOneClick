"use client";

import axios from "axios";
import Image from "next/image";
import { NextResponse } from "next/server";
import React, { useContext, useEffect, useState } from "react";
import Google from "@public/assets/google-icon.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Error from "@public/assets/error.svg";
import toast, { Toaster } from "react-hot-toast";
import SideBg from "@public/assets/signUp-bg.svg";
import Link from "next/link";
import { AuthContext } from "@/app/store/Context";

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState({ number: "" });

  const { email, isRegistered, updateRegistrationStatus } =
    useContext(AuthContext);
    useEffect(()=>{
      if(isRegistered){

        toast.success("OTP sent to your email");
      }
    },[isRegistered])
  useEffect(() => {
    if (!isRegistered) {
      router.replace("/register");
    }
  }, [isRegistered, router]);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); // Update input with the new value
  };

  const [userError, setUserError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        email: email,
        pinCode: input.number,
      };

      console.log("Data to send:", dataToSend); // Log the data being sent

      const response = await axios.post(
        "https://oneclick-server.onrender.com/api/v1/auth/otpCode-complete",

        dataToSend
      );

      console.log("Response:", response); // Log the response data

      if (response.data.success === false) {
        setUserError("error");
        console.log("User already exists");
        return;
      } else {
        toast.success("success");
        setInput({ email: "", password: "" });
      }

      if (response.data.success === true) {
        router.replace("/register/partner-detail");
        updateRegistrationStatus(true);
      }
    } catch (error) {
      console.log("Error:", error); // Log the error for debugging
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
      toast.error("Registration Error");
    }
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 gap-4 mx-auto my-10 lg:grid-cols-2 lg:gap-8 lg:mx-28 ">
        <Toaster />
        {/* Image-Section */}
        <div className="hidden lg:block xl:block">
          <div>
            <Image src={SideBg} alt="side_bg" />
          </div>
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md transition-all mt-3"
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
