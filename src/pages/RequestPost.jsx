import { useContext, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import useAxios from "../../hooks/useAxios";
import { AuthProvider } from "../provider/ContextProvider";
import Swal from "sweetalert2";
import img from "../assets/9264822-removebg-preview.png";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const RequestPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthProvider);
  const email = user?.email;
  const useAxios_hook = useAxios();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    useAxios_hook.get(`/myRequest/${email}`).then((data) => {
      setPosts(data.data);
    });
  }, [useAxios_hook, email]);

  //handel cancel
  //sweet alert
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-600 p-2 text-white rounded-lg font-display2 ml-2",
      cancelButton: "bg-red-600 p-2 text-white rounded-lg font-display2 ",
    },
    buttonsStyling: false,
  });
  const handelCancel = (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Done !",
            text: "Your request canceled",
            icon: "success",
          });
          useAxios_hook.delete(`/myRequestCancel/${id}`).then((status) => {
            if (status.data.deletedCount > 0) {
              const remainingUsers = posts.filter((post) => post._id !== id);
              setPosts(remainingUsers);
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Safe !",
            text: "Request Continue",
            icon: "error",
          });
        }
      });
  };
  return (
    <>
    <HelmetProvider>
       <Helmet>
         <title>Volunteer | My Request</title>
       </Helmet>
   </HelmetProvider>
    <div className="py-10 container mx-auto">
      <h1 className="text-center w-full text-2xl sm:text-4xl font-banner mt-10">
        My Volunteer Request
      </h1>
      <div className="h-[2px] w-40 mx-auto mt-3 bg-gradient-to-r from-indigo-400 to-green-500 rounded-full"></div>
      {posts.length > 0 ? (
        <div className="overflow-x-auto overflow-y-hidden">
          <Table honorable className="mt-10 ">
            <Table.Head>
              <Table.HeadCell>Thumbnail</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Deadline</Table.HeadCell>
              <Table.HeadCell className=""></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {posts.map((post) => (
                <Table.Row
                  key={post._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <Table.Cell className=" max-w-32 min-w-24 sm:min-w-32 px-1 ">
                    <img
                      src={post.thumbnail}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Table.Cell>
                  <Table.Cell className="font-medium text-sm sm:text-lg font-display2 text-wrap">
                    {post.title}
                  </Table.Cell>
                  <Table.Cell className="font-display2 text-wrap text-sm">
                    {post.category}
                  </Table.Cell>
                  <Table.Cell className="font-display2 text-wrap text-sm">
                    {post.deadline}
                  </Table.Cell>
                  <Table.Cell className="px-1 w-fit">
                    <div className="flex flex-col justify-start items-end gap-1 mr-3">
                      <button
                        onClick={() => handelCancel(post._id)}
                        className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden text-sm font-medium leading-6 text-white whitespace-no-wrap bg-red-500 border-2 border-transparent rounded-lg shadow-sm group hover:border-red-500"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-700 rounded-full group-hover:w-56 group-hover:h-56"></span>

                        <span className="relative">Cancel</span>
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ) : (
        <div className="h-100vh container mx-auto w-full">
         
          <img src={img} alt="" className="mx-auto w-[50%] sm:w-[40%]" />
          <h1 className="text-center font-display2 font-medium text-2xl my-5">No data found</h1>
          <div className="w-full flex justify-center">
            <Link
              to="/volunteens"
              className="relative inline-block text-lg group "
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-10 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-96 h-96 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">See all volunteer post</span>
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
    </>
  );
};

export default RequestPost;
