import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Wrapper from "@/app/components/Reauseable/Wrapper";

export default function WebLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}
