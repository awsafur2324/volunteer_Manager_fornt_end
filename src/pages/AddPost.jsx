import { FloatingLabel, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiFillPicture } from "react-icons/ai";
import { BsSignpostFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { LiaUserPlusSolid } from "react-icons/lia";

import "react-datepicker/dist/react-datepicker.css";
import { AuthProvider } from "../provider/ContextProvider";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [startDate, setStartDate] = useState(null);

  //axios custom hook
  const useAxios_hook = useAxios();

  //collect user from context provider
  const { user } = useContext(AuthProvider);

  //collect data
  const handelform = (e) => {
    e.preventDefault();
    const form = e.target;
    const organizer_name = form.organizer_name.value;
    const organizer_email = form.organizer_email.value;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const location = form.location.value;
    const category = form.category.value;
    const vacancy = parseInt(form.vacancy.value);
    const deadline = form.deadline.value;
    const description = form.description.value;
    const data = {
      organizer_name,
      organizer_email,
      thumbnail,
      title,
      location,
      category,
      vacancy,
      deadline,
      description,
    };
    useAxios_hook
      .post("/volunteer_post", data)
      .then((data) => {
        if (data?.data?.acknowledged == true) {
          toast.success("Post Added");
          form.reset();
        } else {
          toast.error("Failed to add");
        }
      })
      .catch(() => toast.error("Sorry try again !"));
  };
  return (
    <>
   <HelmetProvider>
      <Helmet>
        <title>Volunteer | Add Post</title>
      </Helmet>
  </HelmetProvider>
      <div className="py-10">
        <h1 className="text-center w-full text-2xl sm:text-4xl font-banner mt-10">
          Add a volunteer post
        </h1>
        <div className="h-[2px] w-40 mx-auto mt-3 bg-gradient-to-r from-indigo-400 to-green-500 rounded-full"></div>
        <form
          onSubmit={handelform}
          className="max-w-[500px] mx-auto shadow-md mt-10 p-5 border rounded-lg bg-[#00000002] flex flex-col gap-2"
        >
          <TextInput
            type="text"
            icon={AiFillPicture}
            name="thumbnail"
            placeholder="Thumbnail"
            required
          />
          <TextInput
            type="text"
            icon={BsSignpostFill}
            placeholder="Post Title"
            name="title"
            required
          />
          <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
            <TextInput
              type="text"
              icon={IoLocation}
              placeholder="Location"
              name="location"
              required
            />
            <Select name="category" className="grow" required>
              <option disabled selected defaultValue="">
                Category
              </option>
              <option value={"Health Care"}>Health Care</option>
              <option value={"Education"}>Education</option>
              <option value={"Old Care"}>Old Care</option>
              <option value={"Social Service"}>Social Service</option>
              <option value={"Animal Welfare"}>Animal Welfare</option>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
            <TextInput
              className="grow w-full"
              type="number"
              icon={LiaUserPlusSolid}
              name="vacancy"
              min={1}
              placeholder="Amount of volunteer"
              required
            />
            <DatePicker
              required
              className="rounded-md h-10 border  w-full sm:w-fit border-gray-300 bg-white dark:bg-[#374151] dark:border-none focus:border-none focus:outline-none"
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Enter a deadline"
              name="deadline"
              icon={
                <svg
                  className="mt-1 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 47"
                >
                  <mask id="ipSApplication0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSApplication0)"
                  ></path>
                </svg>
              }
            />
          </div>
          <FloatingLabel
            type="text"
            variant="outlined"
            label="Organizer Name"
            value={user.displayName}
            name="organizer_name"
            className="text-gray-500 focus:border-gray-400 focus:text-gray-400"
            sizing="sm"
          />
          <FloatingLabel
            type="email"
            variant="outlined"
            label="Organizer Email"
            name="organizer_email"
            value={user.email}
            sizing="sm"
            className="text-gray-500 focus:border-gray-400 focus:text-gray-400"
          />
          <Textarea
            id="comment"
            placeholder="Description of your post ..."
            name="description"
            required
            rows={4}
          />
          <button
            type="submit"
            className="mt-2 relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-200 border border-gray-200 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 dark:bg-gray-700 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Add Post
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
