import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function WebLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      
    </>
  );
}