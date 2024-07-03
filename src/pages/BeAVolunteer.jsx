import { FloatingLabel, TextInput } from "flowbite-react";
import { MdOutlineMessage } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthProvider } from "../provider/ContextProvider";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BeAVolunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthProvider);
  const navigate = useNavigate();
  const post = useLoaderData();
  const useAxios_hook = useAxios();
  //request process
  const handelRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const applicant_name = form.applicant_name.value;
    const applicant_email = form.applicant_email.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const post_id = post._id;
    const data = {
      applicant_name,
      applicant_email,
      suggestion,
      status,
      post_id,
    };
    useAxios_hook.post("/beVolunteer", data).then((data) => {
      if(data.data.exits == 1){
        Swal.fire({
          title: "You already applied here! \n want to see all your request ?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `I try on others`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            navigate("/myRequest");
          } else if (result.isDenied) {
            navigate(-2);
          }
        });
      }
      else{
        toast.success("Request excepted")
      }
    });
  };
  return (
    <>
    <HelmetProvider>
       <Helmet>
         <title>Volunteer | Be a volunteer</title>
       </Helmet>
   </HelmetProvider>
    <div className="py-10">
      <h1 className="text-center w-full text-2xl sm:text-4xl font-banner mt-10">
        Want to be a volunteer
      </h1>
      <div className="h-[2px] w-40 mx-auto mt-3 bg-gradient-to-r from-indigo-400 to-green-500 rounded-full"></div>
      <form
        onSubmit={handelRequest}
        className="max-w-[500px] mx-auto shadow-md mt-10 p-5 border rounded-lg bg-[#00000002] flex flex-col gap-2"
      >
        <FloatingLabel
          type="text"
          value={post.thumbnail}
          variant="outlined"
          label="Thumbnail"
          className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
          sizing="sm"
        />
        <FloatingLabel
          type="text"
          value={post.title}
          variant="outlined"
          label="Post Title"
          className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
          sizing="sm"
        />
        <FloatingLabel
          type="text"
          value={post.description}
          variant="outlined"
          label="Description"
          className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
          sizing="sm"
        />

        <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
          <div className="w-full grow">
            <FloatingLabel
              type="text"
              value={post.location}
              variant="outlined"
              label="Location"
              className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
              sizing="sm"
            />
          </div>
          <div className="w-full grow">
            <FloatingLabel
              type="text"
              value={post.category}
              variant="outlined"
              label="Category"
              className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
              sizing="sm"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
          <div className="w-full grow">
            <FloatingLabel
              type="text"
              value={post.vacancy}
              variant="outlined"
              label="Amount of volunteer"
              className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
              sizing="sm"
            />
          </div>
          <div className="w-full grow">
            <FloatingLabel
              type="text"
              value={post.deadline}
              variant="outlined"
              label="Dateline"
              className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
              sizing="sm"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-stretch items-stretch gap-2">
          <TextInput
            type="text"
            icon={MdOutlineMessage}
            className="w-full grow "
            placeholder="Suggestion"
            name="suggestion"
            required
          />
          <div className="w-full">
            <FloatingLabel
              type="text"
              defaultValue={"requested"}
              variant="outlined"
              label="Status"
              name="status"
              className="focus:border-gray-400 focus:text-black text-black"
              sizing="sm"
              required
            />
          </div>
        </div>
        <FloatingLabel
          type="text"
          value={user.displayName}
          variant="outlined"
          label="Applicant Name"
          name="applicant_name"
          className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
          sizing="sm"
        />
        <FloatingLabel
          type="email"
          value={user.email}
          variant="outlined"
          label="Applicant Email"
          name="applicant_email"
          sizing="sm"
          className="focus:border-gray-400 focus:text-gray-400 text-gray-400"
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
            Request
          </span>
        </button>
      </form>
    </div>
    </>
  );
};

export default BeAVolunteer;
