// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import img_4 from "../../assets/_https___freepicdownloader-removebg-preview.png";
import img_3 from "../../assets/7505333-removebg-preview.png";
import img_2 from "../../assets/3270961-removebg-preview.png";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-0 z-0 w-full h-[100vh] relative"
      >
        {/* slider 1 */}
        <SwiperSlide className=" h-full w-full bg_slide1">
          <div className="center w-[100%]">
            <h3 className="text-lg font-medium font-banner text-center my-5 sm:text-left text-success">
              WE HAVE 150,000+ LIVE JOBS
            </h3>
            <h1 className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text font-semibold text-info  font-banner2 min-w-full sm:text-nowrap">
              Welcome to Volunteer.com Career Center!
            </h1>
            <p className="w-full sm:max-w-[700px] text-center mx-auto my-8 text-info font-display text-base sm:text-lg">
              Find volunteer post, create trackable resumes and enrich your
              applications.Carefully crafted after analyzing the needs of
              different industries.
            </p>
            <Link
              to="/volunteens"
              className="top-11 relative px-5 py-3 overflow-hidden font-medium  border border-gray-400  shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-400 group-hover:w-full ease "></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-400 group-hover:w-full ease "></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#24686534] group-hover:h-full ease "></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#24686531] group-hover:h-full ease "></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#2468650c] opacity-0 group-hover:opacity-100  group-hover:border-none"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-black">
                Get Started
              </span>
            </Link>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide className=" h-full w-full bg_slide">
          <div className="p-10 lg:p-0 flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center gap-10 w-full h-[100%] text-center lg:text-left">
            <div className="w-full lg:w-[50%]  flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-6xl text font-semibold text-success  font-banner2">
                Thousand of people is Waiting for you!
              </h1>
              <p className="max-w-[700px] mx-auto my-8 text-info font-display text-lg">
                Post a volunteer request to tell us about your project. We will quickly match
                you with the right person.
              </p>
            </div>
            <div className="w-[60%] lg:w-[40%]">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper mt-0 z-0 w-full  relative"
              >
                <SwiperSlide>
                  <img src={img_2} alt="" className="w-[100%] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img_3}
                    alt=""
                    className="w-[100%] object-cover object-bottom"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img_4}
                    alt=""
                    className="w-[100%] object-cover object-bottom"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide className=" h-full w-full bg_slide3 p-0">
          <div className="center w-[100%]">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl  xl:text-5xl text font-semibold text-info  font-banner2 min-w-full sm:text-nowrap">
            Search Between More Then <span className="text-error">10,000+</span> Open volunteer posts!
            </h1>
            <p className="w-full sm:max-w-[700px] text-center mx-auto my-8 text-info font-display text-base sm:text-lg">
            We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds.
            </p>
            <Link
              to="/volunteens"
              className="relative inline-flex items-center justify-start px-3 sm:px-5 py-3 overflow-hidden font-bold rounded-lg group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                View Jobs
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
