import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";

export default function WebLayout({ children }) {
  return (
    <>
      <Header/>
      {children}
      <Footer />
      
    </>
  );
}