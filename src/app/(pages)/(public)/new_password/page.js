"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "@/app/store/Context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const emailRef = useRef("");
  const otpRef = useRef("");
  const passwordRef = useRef("");
  const { cnic, email } = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (cnic || email) {
      emailRef.current.value = email;
    }
  }, [cnic, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      email: emailRef.current.value,
      pinCode: otpRef.current.value,
      newPassword: passwordRef.current.value,
    };
    console.log(Data);
    try {
      console.log("Data>>", Data);
      const response = await axios.post(
        "https://oneclick-server.onrender.com/api/v1/auth/forget-password-otpCode-complete",
        Data
      );

      if (!response) {
        return;
      }

      if (response.data.success === false) {
        toast.error("Invalid email and password");
      } else {
        toast.success("Login successful");

        if (response.data.success === true) {
          router.replace("/login");
        }
      }
    } catch (error) {
      console.error("helloooo", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <div className="grid items-center grid-cols-1 gap-4 mx-4 my-10 lg:grid-cols-2 lg:gap-8 md:mx-8 lg:mx-28">
        <Toaster />
        {/* Image Section */}
        <div className="hidden mx-auto lg:block xl:block">
          {/* <Image src={SideBg} alt="side_bg" /> */}
        </div>

        {/* Form Section */}
        <div className="m-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full p-8 bg-white border border-blue-400 rounded-lg shadow-lg py-7 md:w-96 lg:w-96"
          >
            <h1 className="flex items-center justify-center font-sans text-2xl font-bold text-blue-500">
              New Password
            </h1>

            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="login"
              >
                OTP
              </label>
              <input
                required
                ref={otpRef}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Enter OTP"
                type="string"
                id="cnic"
              />
            </div>

            <div className="">
              <label
                className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                htmlFor="email"
              >
                Email
              </label>
              <input
                ref={emailRef}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Enter your Email"
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                disabled={!!email}
              />
            </div>

            <div className="">
              <label
                className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Enter Your New Password"
                type="password"
                id="password"
                name="password"
              />
            </div>
            {authStatus === "error" && (
              <p className="mt-4 text-xs text-red-500 ">
                Sorry, your password was incorrect
              </p>
            )}
            <div className="mt-2 text-right">
              <Link
                href={"/forgot-password"}
                className="text-xs text-gray-500 cursor-pointer hover:text-blue-400 "
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md  transition-all mt-3"
            >
              Submit
            </button>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center justify-center w-full gap-3 p-2 mt-3 text-sm transition-all border rounded-md hover:bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:bg-blue-700 hover:text-white"
            >
              Login with Google
            </button>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                href={"/register"}
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline hover:text-blue-400"
              >
                or sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
