import { useEffect, useState } from "react";
import { Select } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { TbDeviceImacSearch } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { RiListCheck3 } from "react-icons/ri";
import NeedVolunCard from "../components/NeedVolunCard";
import useAxios from "../../hooks/useAxios";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NeedVolunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  // layout changes
  const [currentLayout, setCurrentLayout] = useState(true); //here true means to show card layout

  //axios get data for pagination
  const useAxios_hook = useAxios();
  //data load search filter and pagination
  useEffect(() => {
    useAxios_hook
      .get(
        `/allVolunteers?page=${currentPage}&size=${itemsPerPage}&category=${category}&search=${search}`
      )
      .then((data) => setPosts(data.data));
  }, [useAxios_hook, currentPage, itemsPerPage, category, search]);
  //here pagination based on search and category so count the page
  useEffect(() => {
    useAxios_hook
      .get(`/pageCount?category=${category}&search=${search}`)
      .then((data) => setCount(data.data.count));
  }, [useAxios_hook, category, search]);
  //handel search
  const handelSearch = () => {
    setSearch(searchText);
  };
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  //pagination
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  return (
    <>
    <HelmetProvider>
       <Helmet>
         <title>Volunteer | All Post</title>
       </Helmet>
   </HelmetProvider>
    <div className="container mx-auto mt-0 pt-20">
      <div className="flex flex-row justify-evenly items-center gap-5 p-2 py-5 bg-gray-500">
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-5 p-2 sm:py-5 grow">
          {/* category */}
          <div className="max-w-md grow w-full">
            <Select
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
              value={category}
              icon={BiCategoryAlt}
            >
              <option value="">Select a category</option>
              <option value={"Health Care"}>Health Care</option>
              <option value={"Education"}>Education</option>
              <option value={"Old Care"}>Old Care</option>
              <option value={"Social Service"}>Social Service</option>
              <option value={"Animal Welfare"}>Animal Welfare</option>
            </Select>
          </div>
          {/* search */}
          <div className="max-w-md grow w-full">
            <div className="relative flex flex-row  items-center">
              <TextInput
                id="email4"
                className="grow w-full"
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
                value={searchText}
                type="email"
                icon={TbDeviceImacSearch}
                placeholder="Search with post title...."
                required
              />
              <button
                onClick={handelSearch}
                title="click to search"
                className="font-display2 absolute right-2 z-10 bg-white dark:bg-gray-700 pl-2 flex items-center"
              >
                <IoMdSearch className="text-2xl" />{" "}
                <span className="hidden sm:block">Search</span>
              </button>
            </div>
          </div>
        </div>
        {/* Layout */}

        <div className="text-2xl text-white px-5">
          <BsGrid3X3Gap
            onClick={() => setCurrentLayout(!currentLayout)}
            className={`${!currentLayout && "hidden"} cursor-pointer`}
          />
          <RiListCheck3
            onClick={() => setCurrentLayout(!currentLayout)}
            className={`${currentLayout && "hidden"} cursor-pointer`}
          />
        </div>
      </div>
      {/* volunteer post */}

      <div
        className={`my-5 p-2 ${
          currentLayout
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 "
            : "w-full overflow-y-auto sm:overscroll-none"
        }`}
      >
        {posts.map((post) => (
          <div key={post._id}>
            <NeedVolunCard post={post} currentLayout={currentLayout} />
            <hr
              className={`${
                currentLayout ? "hidden" : "w-0 sm:w-full mx-auto py-2 mt-3"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="">
        {/* pagination */}
        {posts.length > 0 ? (
          <div className="flex justify-center space-x-1 dark:text-gray-800">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePaginationButton(currentPage - 1)}
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handlePaginationButton(page)}
                type="button"
                title="Page 1"
                className={`${
                  currentPage == page
                    ? "bg-gray-400 text-white font-semibold"
                    : ""
                }inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === numberOfPages}
              onClick={() => handlePaginationButton(currentPage + 1)}
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        ) : (
          <p className="text-center text-red-700 font-display2 font-medium text-xl">No Data found</p>
        )}
      </div>
    </div>
    </>
  );
};

export default NeedVolunteer;
