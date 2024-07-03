import { Link } from "react-router-dom";
import img from "../assets/20602744_6333070.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Error = () => {
  return (
    <>
    <HelmetProvider>
       <Helmet>
         <title>Volunteer | Error Found</title>
       </Helmet>
   </HelmetProvider>
    <div className="h-[100vh] flex flex-col mx-auto justify-center items-center">
      <img src={img} alt="" className="w-[50%] mx-auto " />
      <Link to="/" className="relative inline-flex items-center justify-center px-20 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-64 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Home page</span>
      </Link>
    </div>
    </>
  );
};

export default Error;
