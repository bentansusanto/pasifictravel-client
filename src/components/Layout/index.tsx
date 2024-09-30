import { PageProps } from "@/utils/GlobalType";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layouts = ({ children }: PageProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layouts;
