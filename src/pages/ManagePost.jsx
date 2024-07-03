import Swal from "sweetalert2";
import { Table, Modal } from "flowbite-react";
import { BiCategoryAlt } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";
import { LiaUserPlusSolid } from "react-icons/lia";
import img from "../assets/9264828-removebg-preview.png";
import UpdatePopup from "../components/UpdatePopup";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import { AuthProvider } from "../provider/ContextProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ManagePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // model popup
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postUpdate, setPostUpdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthProvider);
  const useAxios_hook = useAxios();
  //get all data
  useEffect(() => {
    useAxios_hook
      .get(`/Allvolunteer_post/${user?.email}`)
      .then((data) => setPosts(data.data));
  }, [useAxios_hook, user?.email]);

  //sweet alert
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-600 p-2 text-white rounded-lg font-display2 ml-2",
      cancelButton: "bg-red-600 p-2 text-white rounded-lg font-display2 ",
    },
    buttonsStyling: false,
  });
  //delete post
  const handelDelete = (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          useAxios_hook.delete(`/managePost/${id}`).then((data) => {
            if (data.data.deletedCount > 0) {
              const remainingUsers = posts.filter((post) => post._id !== id);
              setPosts(remainingUsers);
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file is safe !",
            icon: "error",
          });
        }
      });
  };

  //update
  const handelUpdate = (id) => {
    setLoading(true);
    setOpenModal(true);

    useAxios_hook.get(`/postUpdate/${id}`).then((data) => {
      setPostUpdate(data.data);
      setLoading(false);
    });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer | Manage Post</title>
        </Helmet>
      </HelmetProvider>
      <div className="py-12 container mx-auto">
        <h1 className="text-center w-full text-2xl sm:text-4xl font-banner mt-10">
          Manage Your Post
        </h1>
        <div className="h-[2px] w-40 mx-auto mt-3 bg-gradient-to-r from-indigo-400 to-green-500 rounded-full"></div>
        <div className="overflow-x-auto overflow-y-hidden">
          {posts.length > 0 ? (
            <Table honorable className="mt-10 ">
              <Table.Head>
                <Table.HeadCell>Thumbnail</Table.HeadCell>
                <Table.HeadCell>Details</Table.HeadCell>
                <Table.HeadCell className=""></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {posts.map((post) => (
                  <Table.Row
                    key={post._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 "
                  >
                    <Table.Cell className=" max-w-40 min-w-24 sm:min-w-40 px-1 max-h-40">
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Table.Cell>
                    <Table.Cell className="px-1 w-[100%] h-full grow flex flex-col  whitespace-nowrap font-display2 font-medium text-gray-900 dark:text-white">
                      <h1 className="text-lg sm:text-xl md:text-2xl font-banner text-wrap">
                        {post.title}
                      </h1>
                      <div className="flex flex-row justify-start items-center gap-1 text-xs md:text-sm font-normal ">
                        <div className="font-medium">
                          <p className="flex flex-row justify-start items-center gap-1">
                            <BiCategoryAlt />
                            Category{" "}
                          </p>
                          <p className="flex flex-row justify-start items-center gap-1">
                            <LuCalendarClock /> Deadline{" "}
                          </p>
                          <p className="flex flex-row justify-start items-center gap-1">
                            <LiaUserPlusSolid />
                            Need volunteer{" "}
                          </p>
                        </div>
                        <div className="font-medium ">
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                        </div>
                        <div className="text-gray-700 dark:text-gray-400">
                          <p>{post.category}</p>
                          <p>{post.deadline}</p>
                          <p>{post.vacancy}</p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-1 w-fit">
                      <div className="flex flex-row justify-end items-center gap-1 mr-3">
                        <button
                          onClick={() => handelUpdate(post._id)}
                          className=" flex items-center justify-center px-2 py-1 text-sm font-medium leading-6 text-white whitespace-no-wrap bg-gray-600 border-2 border-transparent rounded-lg shadow-sm hover:bg-transparent hover:text-green-600"
                        >
                          Update
                        </button>

                        <Link
                          onClick={() => handelDelete(post._id)}
                          className="relative inline-flex items-center justify-center px-2 py-1 overflow-hidden text-sm font-medium leading-6 text-white whitespace-no-wrap bg-gray-600 border-2 border-transparent rounded-lg shadow-sm group hover:border-red-500"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>

                          <span className="relative">Delete</span>
                        </Link>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <div className="h-100vh container mx-auto w-full">
              <img src={img} alt="" className="mx-auto w-[50%] sm:w-[40%]" />
              <h1 className="text-center font-display2 font-medium text-2xl my-5">
                No data found
              </h1>
              <div className="w-full flex justify-center">
                <Link
                  to="/addpost"
                  className="relative inline-block text-lg group "
                >
                  <span className="relative z-10 block p-2 sm:px-5 md:px-10 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-10 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-96 h-96 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Add a post</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* update model */}
        {loading ? (
          ""
        ) : (
          <Modal
            dismissible
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <UpdatePopup
              postUpdate={postUpdate}
              posts={posts}
              setPosts={setPosts}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ManagePost;
