import { useEffect } from "react";
import HowWeWork from "../components/HowWeWork";
import Price from "../components/Price";
import Banner from "../components/banner/Banner";
import Volunteer from "../components/volunteer section/Volunteer";
import Donate from "../components/Donate";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Volunteer | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="">
        <Banner />
        <div className="container mx-auto text-[#0d252a] dark:text-white">
          <Volunteer />
          <HowWeWork />
          <Price />
          <Donate />
        </div>
      </div>
    </>
  );
};

export default Home;
