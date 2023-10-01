import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "/src/index.css";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto py-5">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
