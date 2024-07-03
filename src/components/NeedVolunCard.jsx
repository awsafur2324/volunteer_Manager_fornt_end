import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BiCategoryAlt } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { LiaUserPlusSolid } from "react-icons/lia";
import { useEffect } from "react";

const NeedVolunCard = ({ currentLayout, post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className={`${
          currentLayout
            ? "self-center align-middle w-full sm:w-96 md:w-80 lg:w-96 mx-auto border rounded-lg shadow-md"
            : "w-full flex flex-row justify-start items-center sm:items-start text-wrap"
        }`}
      >
        <div
          className={`relative rounder-lg  ${
            currentLayout
              ? " sm:h-56 p-2 max-h-68"
              : "min-w-36 max-w-36 sm:max-w-60 lg:max-w-96 mb-2"
          }`}
        >
          <img
            src={post.thumbnail}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div
            className={`flex flex-row gap-1 justify-center items-center align-middle absolute font-display2  px-2 bg-green-600 text-white rounded-l-full ${
              currentLayout
                ? " text-sm right-5 top-5 "
                : "text-xs sm:text-sm right-2 top-2 md:right-5 md:top-5 "
            }`}
          >
            <BiCategoryAlt />
            <div className="mt-[2px]">{post.category}</div>
          </div>
        </div>
        <div
          className={` ${
            currentLayout
              ? "flex flex-col gap-1 px-3"
              : "flex flex-row justify-between sm:justify-center sm:grow items-center w-full px-1 sm:px-3"
          }`}
        >
          <div
            className={`${
              currentLayout
                ? "flex flex-col justify-center gap-1"
                : "grow flex flex-col justify-center gap-0 sm:gap-1 text-wrap min-w-48"
            }`}
          >
            <h1
              className={`font-banner ${
                currentLayout ? "text-xl" : "text-sm sm:text-base md:text-xl "
              }`}
            >
              {post.title}
            </h1>
            <p
              className={`flex items-center gap-1 font-display2 ${
                currentLayout ? "text-base" : "text-xs sm:text-xs md:text-base"
              }`}
            >
              <LuCalendarClock />
              <span className="">Deadline : {post.deadline}</span>
            </p>
            <p
              className={`flex items-center gap-1 font-display2 ${
                currentLayout ? "text-base" : "text-xs sm:text-xs md:text-base"
              }`}
            >
              <IoLocationOutline />
              <span className="">{post.location}</span>
            </p>
            <p
              className={`flex items-center gap-1 font-display2 ${
                currentLayout ? "text-base" : "text-xs sm:text-xs md:text-base"
              }`}
            >
              <LiaUserPlusSolid />
              <span className="">Vacancy : {post?.vacancy <= 0 ? <span className="text-red-500">Full Filled</span> : post.vacancy}</span>
            </p>
          </div>

          <Link
            to={`/details/${post._id}`}
            className={`w-fit text-center text-xs sm:text-sm md:text-base my-5 relative  font-medium text-green-600 bg-green-100 border border-green-100 rounded-lg shadow-inner group ${
              currentLayout
                ? " px-5 py-3 w-full overflow-hidden"
                : "p-2 px-5 sm:py-3 w-fit"
            }`}
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-white ease text-nowrap ">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
NeedVolunCard.propTypes = {
  currentLayout: PropTypes.bool,
  post: PropTypes.any,
};
export default NeedVolunCard;
