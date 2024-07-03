import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { TextInput } from "flowbite-react";
import { AuthProvider } from "../../provider/ContextProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const locationPath = location?.state ? `${location.state}` : "/";
  //context provider
  const { createUser } = useContext(AuthProvider);
  //on submit
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.pass.value;
    //password validation
    let patten = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!patten.test(password)) {
      toast.error(
        "Enter 6 character password with minimum one uppercase and lowercase letter"
      );
    } else {
      createUser(email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
          });
          //Now reset the input field
          toast.success("Registration Successful");
          e.target.reset();
          navigate(locationPath);
        })
        .catch(() => toast.error("Registration Failed"));
    }
  };
  // password
  const [open, setOpen] = useState(false);
  const openEye = () => {
    setOpen(false);
  };
  const closeEye = () => {
    setOpen(true);
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer | Register</title>
        </Helmet>
      </HelmetProvider>
      <div className="h-[100vh] overflow-hidden  ">
        <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
        <div className="relative z-20">
          <h1 className="text-4xl font-banner font-medium text-center my-5 mt-20 text-green-700  relative">
            Registration
          </h1>
          <form
            onSubmit={handelSubmit}
            className="flex flex-col justify-center items-center relative w-full"
          >
            <div className="w-full xs:w-96 flex flex-col justify-center items-center  my-5 gap-3 bg-[#ff404045] p-3 py-5 xs:p-5 rounded shadow">
              <TextInput
                className="w-full"
                type="text"
                name="name"
                icon={FaUser}
                placeholder="Name"
                required
              />
              <TextInput
                className="w-full"
                type="email"
                name="email"
                icon={MdOutlineEmail}
                placeholder="Email"
                required
              />
              <TextInput
                className="w-full"
                type="text"
                name="photoUrl"
                icon={MdPhoto}
                placeholder="Your Photo Url"
                required
              />
              <label className="relative input input-bordered rounded flex items-center gap-2 grow w-full">
                <TextInput
                  className="w-full border-none"
                  type={open ? "text" : "password"}
                  name="pass"
                  icon={RiLockPasswordLine}
                  placeholder="Password"
                  required
                />
                <div className="absolute right-3 flex flex-row justify-center items-center ">
                  <FaRegEye
                    onClick={openEye}
                    className={`${!open && "hidden"} cursor-pointer`}
                  />
                  <FaRegEyeSlash
                    onClick={closeEye}
                    className={`${open && "hidden"} cursor-pointer`}
                  />
                </div>
              </label>
              <button
                type="submit"
                className="w-full relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Sign Up
                </span>
              </button>
            </div>
          </form>
          <p className="text-center text-sm font-display2 text-white">
            Are you already register ? Then{" "}
            <Link
              to="/login"
              className="text-blue-500 cursor-pointer relative z-10"
            >
              Log in !
            </Link>
          </p>
        </div>
        {/* background */}
        <div>
          <svg
            className="absolute top-0 right-0 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Register;
