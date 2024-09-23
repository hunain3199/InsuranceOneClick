import react from "react";
import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("../../components/AdminApp"), { ssr: false });



const Page = () => (
  <>
    <AdminApp />
  </>
);

export default Page;
