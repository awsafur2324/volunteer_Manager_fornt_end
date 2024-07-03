import { Timeline } from "flowbite-react";
import { VscGitStashApply } from "react-icons/vsc";
import { TbDeviceImacSearch } from "react-icons/tb";
import { BsPersonFillCheck } from "react-icons/bs";
import img from "../assets/22908886_6736639__1_-removebg.png";

const HowWeWork = () => {
  return (
    <div id="howWeWork">
      <div className="w-full text-center lg:text-left mt-5">
        <h1 className="text-2xl sm:text-4xl font-banner mb-2">How we work ?</h1>
        <p className="mx-auto lg:mx-0 max-w-96 text-sm font-display2">
          Post a job to tell us about your project. {`We'll`} quickly match you
          with the right freelancers.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 p-2">
        <div className="w-full lg:w-[65%]">
          <div className="mb-5">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={BsPersonFillCheck} />
                <Timeline.Content>
                  <Timeline.Title>Register an account</Timeline.Title>
                  <Timeline.Body className="w-full lg:max-w-[500px]">
                    Volunteer or a user need to sign up in our system first. So
                    that we can mange his needed and provide the best solution.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={TbDeviceImacSearch} />
                <Timeline.Content>
                  <Timeline.Title>Find your jobs</Timeline.Title>
                  <Timeline.Body className="w-full lg:max-w-[500px]">
                    There are many type of jobs available for volunteer . You
                    can choose any of them, we mainly provide 5 category for
                    volunteer support.You can check it out.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={VscGitStashApply} />
                <Timeline.Content>
                  <Timeline.Title>Apply for the job</Timeline.Title>
                  <Timeline.Body className="w-full lg:max-w-[500px]">
                    You can apply on your dream jobs by full fill a simple form
                    and be ready for the interview . we provide the most easy
                    way to apply in a jobs.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
        <div className="w-[60%] lg:w-[45%]">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
