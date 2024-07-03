import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const post = useLoaderData();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer | Details</title>
        </Helmet>
      </HelmetProvider>
      <div className="py-2">
        <div className="container mt-20 mx-auto flex flex-col md:flex-row justify-start items-stretch gap-10 p-4 lg:p-0">
          <div className=" flex justify-center rounded-xl p-5 w-full lg:w-[70%]">
            <img
              src={post.thumbnail}
              alt=""
              width={"100%"}
              height={"100%"}
              className="mx-auto object-cover"
            />
          </div>
          <div className=" w-full my-2">
            <h1 className="text-[#131313] dark:text-info  text-4xl font-bold playfair-font">
              {post.title}
            </h1>
            <p className="text-base text-[#131313cc] dark:text-info  font-medium sans-font my-2">
              Deadline : {post.deadline}
            </p>
            <hr />
            <p className="text-[#131313cc] dark:text-info  text-base font-medium sans-font my-3">
              {post.category}
            </p>
            <hr />
            <p className="text-sm sans-font my-4">
              <span className="font-semibold text-[#131313] dark:text-info ">
                Description :
              </span>{" "}
              <span className="text-wrap text-justify text-[#131313b3] font-normal dark:text-gray-400 ">
                {post.description}
              </span>
            </p>
            <hr className="my-5" />
            <div className=" flex flex-row justify-start items-start gap-3">
              <div className="flex flex-col gap-2 text-[#131313b3] dark:text-gray-400 font-normal text-xs sans-font">
                <p>Location </p>
                <p>Publisher Name </p>
                <p>Publisher Email </p>
                <p>No. of volunteers needed </p>
              </div>
              <div className="flex flex-col gap-2 text-[#131313b3] dark:text-gray-400 font-normal text-xs sans-font">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="flex flex-col gap-2 text-[#131313] dark:text-info font-semibold text-xs sans-font">
                <p>{post.location}</p>
                <p>{post.organizer_name}</p>
                <p>{post.organizer_email}</p>
                <p>{post.vacancy <= 0 ? "Full Filled" : post.vacancy}</p>
              </div>
            </div>
            {post.vacancy <= 0 ? (
              <div className="flex flex-row gap-5 mt-8 sans-font">
                <button
                  onClick={() => toast.warning("Vacancy are full filled")}
                  className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Be a volunteer</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-5 mt-8 sans-font">
                <Link
                  to={`/beVolunteer/${post._id}`}
                  className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Be a volunteer</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
