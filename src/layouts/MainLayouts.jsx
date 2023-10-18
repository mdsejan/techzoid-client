import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
