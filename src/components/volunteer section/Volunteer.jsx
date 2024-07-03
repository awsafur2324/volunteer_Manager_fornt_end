import { Link } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Volunteer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://volunteer-manager-server.vercel.app/volunteer_post")
      .then((data) => setPosts(data.data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl sm:text-4xl font-banner">
        Volunteer Needs Now
      </h1>
      <div className="w-36 border border-error mx-auto my-5"></div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 p-2">
        {posts.slice(0,6).map((post) => (
          <VolunteerCard key={post._id} post={post} />
        ))}
      </div>

      <Link
        to="/volunteens"
        className="mx-auto flex relative  items-center justify-center w-[50%] sm:max-w-[40%] py-2 overflow-hidden text-sm font-display2 font-medium text-primary dark:text-info border-2 border-primary  rounded-lg hover:text-white group hover:bg-gray-50"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-primary dark:text-info opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease rounded-none"></span>
        <span className="relative">See All Post</span>
      </Link>
    </div>
  );
};

export default Volunteer;
