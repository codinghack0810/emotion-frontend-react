import { Outlet } from "react-router-dom";

// project import
// import SideBar from "./SideBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className=" bg-[#171B1F] min-h-[100vh] relative ">
      <Header />
      <Outlet />
      <Footer/>

    </div>
  );
};

export default MainLayout;
