"use client";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
// import { signIn } from "next-auth/react";
// import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from "next/navigation";
import Error from "@public/assets/error.svg";
import toast, { Toaster } from "react-hot-toast";
import SideBg from "@public/assets/signUp-bg.svg";
import Link from "next/link";
import { AuthContext } from "@/app/store/Context";

function Register() {
  const {
    updateUserEmail,
    updatedUserName,
    updateRegistrationStatus,
    isRegistered,
    updateToken,
  } = useContext(AuthContext);
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    if (isRegistered) {
      router.replace("/otp");
    } else {
      router.replace("/register");
    }
  }, [isRegistered, router]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://oneclick-server.onrender.com/api/v1/auth/register",
        input
      );

      console.log("this is my register response", response.data);
      if (!response.data.success) {
        toast.error(response.data.message);
        console.log("User registration error:", response.data.message);
        return;
      }

      const { email, name } = response.data.user;
      updateUserEmail(email);
      updatedUserName(name);
      updateRegistrationStatus(true);

      toast.success("Registration successful!");
      setInput({ name: "", email: "", password: "" });
      // localStorage.setItem("token", response.data.token);
      updateToken(response.data.token);
    } catch (error) {
      console.error("Error in registering the user:", error);
      toast.error("Registration Error");
    }
  };
  // function google(){
  //   return (
  //     <>
  //     <Google />
  //     </>
  //   )
  // }

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
              PARTNER REGISTRATION
            </h1>
            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={input.name}
                onChange={handleChange}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Full Name"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                value={input.email}
                onChange={handleChange}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Registered email address"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                value={input.password}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 mt-3 text-white transition-all bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200"
            >
              Register
            </button>
            <button className="flex items-center justify-center w-full gap-3 p-2 mt-3 text-sm transition-all border rounded-md hover:bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:bg-blue-700 hover:text-white">
              hello
            </button>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                href="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline hover:text-blue-400"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
