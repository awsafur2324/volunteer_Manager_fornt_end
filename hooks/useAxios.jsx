import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../src/provider/ContextProvider";
import { toast } from "react-toastify";

const axios_Config = axios.create({
    baseURL: "https://volunteer-manager-server.vercel.app",
    withCredentials: true,
  });

const useAxios = () => {
    const { logOut } = useContext(AuthProvider);
    const navigate = useNavigate();
    useEffect(() => {
      axios_Config.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          if (error?.response?.status == 401 || error?.response?.status == 403) {
            logOut().then(() => {
              toast("Please Log in again");
              navigate("/login");
            });
          }
        }
      );
    }, [logOut, navigate]);
    return axios_Config;
  };
  

export default useAxios;