"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import Google from "@public/assets/google-icon.svg";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SideBg from "@public/assets/signIn-bg.svg";
import "@/app/globals.css";
import Link from "next/link";
import { AuthContext } from "@/app/store/Context";
import Cookies from "js-cookie";

function Login() {
  const [userError, setUserError] = useState("");
  const emailRef = useRef("");
  const partner_cnic_number = useRef("");
  const password = useRef("");
  const { cnic, email, updatedUserCnic, updateToken } = useContext(AuthContext);
  const [authStatus, setAuthStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (cnic || email) {
      partner_cnic_number.current.value = cnic;
      emailRef.current.value = email;
    }
  }, [cnic, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const partnerData = {
        email: emailRef.current.value,
        userId: partner_cnic_number.current.value,
        password: password.current.value,
      };
      console.log("partnerData>>", partnerData);
      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/auth/login`,
        partnerData,
        { withCredentials: true }
      );
      const token = response.data.data.token;

      if (!response) {
        return;
      }

      if (response.data.success === false) {
        toast.error("Invalid email and password");
      } else {
        toast.success("Login successful");
        updatedUserCnic(response.data.userId);

        // Store the token in localStorage
        // localStorage.setItem("token", token);
        console.log("login tokem", token);
        updateToken(token);
        if (response.data.data.isAdmin === true) {
          router.replace("/admin-dashboard");
        } else {
          router.replace("/partner-dashboard");
        }

        // Clear the form fields
        emailRef.current.value = "";
        partner_cnic_number.current.value = "";
        password.current.value = "";
      }
    } catch (error) {
      console.error("helloooo",error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 gap-4 mx-4 my-10 lg:grid-cols-2 lg:gap-8 md:mx-8 lg:mx-28">
        <Toaster />
        {/* Image Section */}
        <div className="hidden mx-auto lg:block xl:block">
          <Image src={SideBg} alt="side_bg" />
        </div>

        {/* Form Section */}
        <div className="m-auto">
          <form
            className="w-full p-8 bg-white border border-blue-400 rounded-lg shadow-lg py-7 md:w-96 lg:w-96"
            onSubmit={handleSubmit}
          >
            <h1 className="flex items-center justify-center font-sans text-2xl font-bold text-blue-500">
              SIGN IN
            </h1>

            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="login"
              >
                CNIC
              </label>
              <input
                required
                ref={partner_cnic_number}
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Registered CNIC number"
                type="string"
                id="cnic"
                defaultValue={cnic}
                disabled={!!cnic}
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
                placeholder="Email"
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
                ref={password}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Password"
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
                href={"/forgot_password"}
                className="text-xs text-gray-500 cursor-pointer hover:text-blue-400 "
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white p-2 rounded-md  transition-all mt-3"
            >
              Login
            </button>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center justify-center w-full gap-3 p-2 mt-3 text-sm transition-all border rounded-md hover:bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:bg-blue-700 hover:text-white"
            >
              <span>
                <Image src={Google} alt="Google-icon" />
              </span>
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
}

export default Login;
