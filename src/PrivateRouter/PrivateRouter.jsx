import { useContext } from "react";
import { AuthProvider } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { HashLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  //from context provider
  const { user, isLoading } = useContext(AuthProvider);
  if (isLoading) {
    return (
      <span className="h-[100vh] w-fill flex justify-center items-center top-0 z-50 bg-gray-900">
        <HashLoader color="#F39C12" />
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>; //here use navigate not NavLink
};
PrivateRouter.propTypes = {
  children: PropTypes.any,
};

export default PrivateRouter;
