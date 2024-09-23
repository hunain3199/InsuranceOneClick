'use client';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { AuthContext } from '@/app/store/Context';
import SideBg from '@public/assets/signUp-bg.svg';

function Register() {
  const {
    updateUserEmail,
    updatedUserName,
    updateRegistrationStatus,
    isRegistered,
    updateToken,
  } = useContext(AuthContext);

  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isRegistered) {
      router.replace('/otp');
    }
  }, [isRegistered]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://oneclick-server-x09s.onrender.com/api/v1/auth/register',
        input
      );

      console.log('this is my register response', response.data);
      if (!response.data.success) {
        toast.error(response.data.message);
        console.log('User registration error:', response.data.message);
        setLoading(false);
        return;
      }

      const { email, name } = response.data.user;
      updateUserEmail(email);
      updatedUserName(name);
      updateRegistrationStatus(true);
      updateToken(response.data.token);

      toast.success('Registration successful!');
      setInput({ name: '', email: '', password: '' });
      setLoading(false);
      router.replace('/otp');
    } catch (error) {
      console.error('Error in registering the user:', error);
      toast.error('Registration Error');
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid items-center grid-cols-1 gap-4 mx-auto my-10 lg:grid-cols-2 lg:gap-8 lg:mx-28">
        <Toaster />

        <div className="hidden lg:block xl:block">
          <div>
            <Image src={SideBg} alt="side_bg" loading="lazy" />
          </div>
        </div>

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
                required
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
                required
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
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full p-2 mt-3 text-white transition-all bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 ${
                loading && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={loading}
            >
              Register
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
