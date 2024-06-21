"use server";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

const Cookie = () => {
  const authToken = Cookies.get("token");

  cookies().set({
    token: authToken,
    httpOnly: true,
  });
};

export default Cookie;
