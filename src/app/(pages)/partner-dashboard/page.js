'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'; // import useRouter

const AdminApp = dynamic(() => import('../../components/AdminApp'), {
  ssr: false, // Disable server-side rendering
});

const Page = () => {
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const token = localStorage.getItem('token'); // 'token' should be a string key
    if (!token) {
      router.replace('/'); // Redirect to home page if no token is found
    }
  }, [router]); // Add router as a dependency

  return (
    <>
      <AdminApp />
    </>
  );
};

export default Page;
