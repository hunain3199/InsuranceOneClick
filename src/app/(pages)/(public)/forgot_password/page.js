"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgetPassword = ({ token }) => {
  const emailRef = useRef(null);
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!validateEmail(email)) {
      setEmailError("Email is invalid");
      return;
    }

    setEmailError("");
    try {
      console.log({ email });
      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/auth/forget-password`,
        { email }
      );
      if (response.data.success === true) {
        toast.success("Otp sent to your email!");
        router.replace("/new_password");
      }
      console.log(response.data);

      emailRef.current.value = "";
    } catch (error) {
      toast.error("Error sending password reset link");
    }
  };

  return (
    <form onSubmit={onSubmit} className="">
      <div className="grid grid-cols-4 gap-3 mt-[20px]">
        <div className="col-span-4">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue text-white px-[30px] py-[10px] text-[18px] rounded mt-[20px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ForgetPassword;
