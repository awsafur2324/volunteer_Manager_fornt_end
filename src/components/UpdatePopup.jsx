import { FloatingLabel, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { AiFillPicture } from "react-icons/ai";
import { BsSignpostFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { LiaUserPlusSolid } from "react-icons/lia";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";


const UpdatePopup = ({ setOpenModal, postUpdate, setPosts, posts }) => {
  const [startDate, setStartDate] = useState(postUpdate.deadline);
  const useAxios_hook = useAxios();
  //update all data
  const handelSingleUpdate = (e) => {
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
    useAxios_hook.put(`/postUpdate/${postUpdate._id}`, data).then((data) => {
      if (data.data.matchedCount > 0) {
        toast.success("Update successfully");
        const updateItem = posts.filter((post) => post._id === postUpdate._id);
        const RemainItem = posts.filter((post) => post._id !== postUpdate._id);

        updateItem[0] = {
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
        const newUpdate = [...updateItem ,...RemainItem ];
        setPosts(newUpdate);
        setOpenModal(false);
      }
    });
  };
  return (
    <div className="shadow-md bg-white dark:bg-gray-700 rounded-lg">
      <button
        className="absolute -top-2 -right-2 font-display1 text-white bg-red-600 rounded-full px-2 "
        onClick={() => setOpenModal(false)}
      >
        x
      </button>
      <form
        onSubmit={handelSingleUpdate}
        className="max-w-[500px] mx-auto  my-10 p-5 border rounded-lg  flex flex-col gap-2"
      >
        <TextInput
          defaultValue={postUpdate.thumbnail}
          type="text"
          icon={AiFillPicture}
          name="thumbnail"
          placeholder="Thumbnail"
          required
        />
        <TextInput
          type="text"
          defaultValue={postUpdate.title}
          icon={BsSignpostFill}
          placeholder="Post Title"
          name="title"
          required
        />
        <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
          <TextInput
            type="text"
            icon={IoLocation}
            name="location"
            defaultValue={postUpdate.location}
            placeholder="Location"
            required
          />
          <Select
            name="category"
            defaultValue={postUpdate.category}
            className="grow"
            required
          >
            <option disabled selected value="">
              Category
            </option>
            <option>Health Care</option>
            <option>Education</option>
            <option>Old Care</option>
            <option>Social Service</option>
            <option>Animal Welfare</option>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
          <TextInput
            className="grow w-full"
            defaultValue={postUpdate.vacancy}
            type="number"
            name="vacancy"
            icon={LiaUserPlusSolid}
            placeholder="Amount of volunteer"
            required
          />
          <DatePicker
            required
            className="rounded-md h-10 border  w-full sm:w-fit border-gray-300 bg-white dark:bg-[#374151] dark:border-gray-600 dark:text-gray-300 focus:border-none focus:outline-none"
            showIcon
            selected={startDate}
            name="deadline"
            onChange={(date) => setStartDate(date)}
            placeholderText="Enter a deadline"
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
                    <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
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
          value={postUpdate.organizer_name}
          variant="outlined"
          label="Organizer Name"
          name="organizer_name"
          className="focus:border-gray-400 focus:text-gray-400 dark:bg-gray-700"
          sizing="sm"
        />
        <FloatingLabel
          type="email"
          value={postUpdate.organizer_email}
          variant="outlined"
          label="Organizer Email"
          name="organizer_email"
          sizing="sm"
          className="focus:border-gray-400 focus:text-gray-400 dark:bg-gray-700"
        />
        <Textarea
          defaultValue={postUpdate.description}
          id="comment"
          placeholder="Description of your post ..."
          required
          name="description"
          rows={4}
        />
        <button
          type="submit"
          className="mt-2 relative px-5 py-3 overflow-hidden font-medium text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-900 border border-gray-200 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-600  opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Update
          </span>
        </button>
      </form>
    </div>
  );
};
UpdatePopup.propTypes = {
  setOpenModal: PropTypes.any,
  postUpdate: PropTypes.any,
  setPosts: PropTypes.any,
  posts: PropTypes.any,
};
export default UpdatePopup;
