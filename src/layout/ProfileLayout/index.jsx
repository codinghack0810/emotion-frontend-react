import { Outlet } from "react-router-dom";

// import page part.
import Navbar from "./Navbar";

const ProfileLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#217cfd",
        backgroundImage:
          "linear-gradient(193deg, #217cfd 0%, #B721FF 50%, #e60b8c 100%)",
      }}
    >
      <Navbar />
      <div className="pt-[4rem] ">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
