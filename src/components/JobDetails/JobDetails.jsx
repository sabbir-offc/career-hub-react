import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));

  const handleApplyJob = () => {
    toast.success("Job Applied Succesfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div>
      <div className="bg-jobs-bg h-[40vh] bg-no-repeat text-center flex items-center justify-center">
        <h3 className="text-3xl font-extrabold">
          Job Details of: {job.job_title}
        </h3>
      </div>
      <div className="grid gap-6 md:grid-cols-4 mt-20">
        <div className="border md:col-span-3">
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
            <p className="mt-6 font-bold text-black">
              Educational Requirments:
            </p>
            <p>{job.educational_requirements}</p>
          </div>
          <div>
            <p className="mt-6 font-bold text-black">Experience:</p>
            <p>{job.experiences}</p>
          </div>
        </div>
        <div className="border p-8">
          <div>
            <h2 className="text-lg font-extrabold">Job Details</h2>
            <hr className="mt-4" />
            <div>
              <h2 className="text-lg font-extrabold">Contact Information</h2>
              <hr className="mt-4" />
              <p>Phone: {job.contact_information.phone}</p>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            id="special-btn"
            className="px-5 py-3 rounded-lg text-white font-bold text-xl mt-8"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
