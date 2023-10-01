import { useLoaderData, useParams } from "react-router-dom";

import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import getStoredJobApplication from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));

  const handleApplyJob = () => {
    getStoredJobApplication(job);
  };
  return (
    <div>
      <div className="bg-jobs-bg h-[40vh] bg-no-repeat text-center flex items-center justify-center">
        <h3 className="text-3xl font-extrabold">
          Job Details of: {job.job_title}
        </h3>
      </div>
      <div className="grid gap-6 md:grid-cols-5 my-20 place-items-center mx-auto">
        <div className="md:col-span-3">
          <p className="text-lg font-bold">
            Job Description:{" "}
            <span className="font-medium text-[#757575]">
              {job.job_description}
            </span>
          </p>
          <p className="text-lg font-bold mt-6">
            Job Description:{" "}
            <span className="font-medium text-[#757575]">
              {job.job_responsibility}
            </span>
          </p>
          <div>
            <p className="mt-6 font-bold text-black mb-4">
              Educational Requirments:
            </p>
            <p>{job.educational_requirements}</p>
          </div>
          <div>
            <p className="mt-6 font-bold text-black mb-4">Experience:</p>
            <p>{job.experiences}</p>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="bg-gradient-to-b from-[rgba(126,144,254,0.10)] to-[rgba(152,115,255,0.10)] rounded-lg p-8">
            <h2 className="text-lg font-extrabold">Job Details</h2>
            <hr className="my-4" />
            <div>
              <p className="flex items-center gap-2 text-xl text-[#757575]">
                <AiOutlineDollar className="text-[#9873FF] text-2xl"></AiOutlineDollar>{" "}
                <span className="font-bold text-black">Salary:</span>{" "}
                {job.salary}
              </p>
              <p className="flex items-center gap-2 mt-4 text-xl text-[#757575]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                    stroke="url(#paint0_linear_7_412)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7_412"
                      x1="3"
                      y1="11.8615"
                      x2="21"
                      y2="11.8615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7E90FE" />
                      <stop offset="1" stopColor="#9873FF" />
                    </linearGradient>
                  </defs>
                </svg>{" "}
                <span className="font-bold text-black">Job Title:</span>{" "}
                {job.job_title}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-extrabold">Contact Information</h2>
              <hr className="my-6" />
              <p className="flex items-center gap-2 text-xl text-[#757575]">
                <HiOutlinePhone className="text-[#9873FF] text-2xl"></HiOutlinePhone>{" "}
                <span className="font-bold text-black">Phone:</span>{" "}
                {job.contact_information.phone}
              </p>
              <p className="flex items-center gap-2 text-xl mt-4 text-[#757575]">
                <AiOutlineMail className="text-[#9873FF] text-2xl"></AiOutlineMail>
                <span className="font-bold text-black">Email:</span>
                {job.contact_information.email}
              </p>
              <p className="flex items-center gap-2 text-xl mt-4 text-[#757575]">
                <CiLocationOn className="text-[#9873FF] text-2xl"></CiLocationOn>
                <span className="font-bold text-black">Adderess:</span>
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            id="special-btn"
            className="px-5 py-3 w-full rounded-lg text-white font-bold text-xl mt-8"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
