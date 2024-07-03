import { FloatingLabel } from "flowbite-react";
import img from "../assets/18108.jpg";

const Donate = () => {
  return (
    <div
      style={{ "--image-url": `url(${img})` }}
      className="bg-[image:var(--image-url)] w-full h-96 bg-center bg-no-repeat bg-cover bg-fixed"
    >
      <div className="bg-[#000000b0] w-full h-96 flex flex-col justify-center items-center">
        <h1 className="text-center text-white font-banner1 text-4xl mb-5 font-extrabold">
          Donate To Our Charity
        </h1>
        <p className="text-info text-base max-w-[500px] mx-auto text-center mb-5 font-display ">
          We are working for old and child care group . {`It's`} a great opportunity to helping those needed people through us
        </p>
        <div className="w-60 mx-auto">
          <FloatingLabel
            variant="standard"
            label="Donate amount"
            className="text-white mb-5"
          />
          <button className="px-5 py-2.5 relative rounded group text-white font-medium inline-block w-full">
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Donate Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
