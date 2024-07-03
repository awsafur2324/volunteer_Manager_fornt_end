import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddPost from "../pages/AddPost";
import ManagePost from "../pages/ManagePost";
import Details from "../components/Details";
import BeAVolunteer from "../pages/BeAVolunteer";
import RequestPost from "../pages/RequestPost";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/volunteens",
        element: <NeedVolunteer />,
      },
      {
        path: "/addpost",
        element: <PrivateRouter><AddPost /></PrivateRouter>,
      },
      {
        path: "/managepost",
        element: <PrivateRouter><ManagePost /></PrivateRouter>,
      },
      {
        path : "/details/:id",
        element : <PrivateRouter><Details /></PrivateRouter>,
        loader: ({ params }) => fetch(`https://volunteer-manager-server.vercel.app/details/${params.id}`, {
          credentials: 'include'
        }),
      },
      {
        path : "/beVolunteer/:id",
        element : <PrivateRouter><BeAVolunteer /></PrivateRouter>,
        loader: ({ params }) => fetch(`https://volunteer-manager-server.vercel.app/details/${params.id}`, {
          credentials: 'include'
        }),
      },{
        path : "/myRequest",
        element : <PrivateRouter><RequestPost /></PrivateRouter>
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/register",
        element : <Register />
      }
    ],
  },
]);

export default router;
