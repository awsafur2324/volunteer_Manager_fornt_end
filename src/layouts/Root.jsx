import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

import Footer_Section from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <Nav />
      <div className="text-[#0d252a] dark:text-white">
        <Outlet />
      </div>
      <ToastContainer />
      <Footer_Section />

    </div>
  );
};

export default Root;
