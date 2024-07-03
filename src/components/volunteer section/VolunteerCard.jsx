import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiCategoryAlt } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";
import { useEffect } from "react";
const VolunteerCard = ({post}) => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div className=" self-center align-middle w-full sm:w-96 md:w-80 lg:w-96 mx-auto border rounded-lg shadow-md">
        <div className="relative p-2 rounder-lg max-h-68 sm:h-56">
          <img
            src={post.thumbnail}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="flex flex-row gap-1 justify-center items-center align-middle absolute top-5 font-display2 text-sm right-5 px-2 bg-green-600 text-white rounded-l-full">
            <BiCategoryAlt />
            <div className="mt-[2px]">{post.category}</div>
          </div>
        </div>
        <div className="p-3 flex flex-col gap-1">
          <h1 className="text-xl font-banner">{post.title}</h1>
          <p className="flex items-center gap-1 text-base font-display2">
            <LuCalendarClock />
            <span className="">Dateline : {post.deadline}</span>
          </p>

          <Link
            to={`/details/${post._id}`}
            className="text-center mt-5 relative px-5 py-3 overflow-hidden font-medium text-green-600 bg-green-100 border border-green-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-white ease">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
VolunteerCard.propTypes = {
  post: PropTypes.any,
};
export default VolunteerCard;
