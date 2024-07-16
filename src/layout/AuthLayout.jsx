import { Outlet } from "react-router-dom";

// project import
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AuthBackground from "./AuthBackground";

const AuthLayout = () => {
  return (
    <div className="w-[100vw] min-h-[100vh]   flex flex-col items-center bg-[#171B1F] relative ">
      <AuthBackground className="-z-50">
        
      </AuthBackground>
      <div className="absolute flex flex-col w-full h-full justify-center items-center">
          <Outlet className="relative" />
        </div>
    </div>
  );
};

export default AuthLayout;
