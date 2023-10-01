import { useEffect, useState } from "react";
import AppliedJobDetails from "./AppliedJobDetails";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const [jobCard, setJobCard] = useState([]);
  const [notFound, setNotFound] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("job-applications"));
    if (jobs) {
      setJobCard(jobs);
    } else {
      setNotFound("Not Found, Try applying job and get back to this page.");
    }
  }, []);
  return (
    <>
      <div className="bg-applied-jobs-bg bg-no-repeat h-[40vh] bg-left-bottom mb-32 flex flex-col items-center justify-center">
        <h2 className=" text-[#1A1919] text-3xl text-center font-bold">
          Applied Jobs
        </h2>
      </div>
      {notFound && (
        <div className="text-center container mx-auto h-[30vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center">{notFound}</h1>
        </div>
      )}
      {user?.email ? (
        <div className="container mx-auto flex flex-col gap-7 mb-32">
          {jobCard.map((job) => (
            <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
          ))}
        </div>
      ) : (
        <>
          <div className="text-center container mx-auto h-[30vh] flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">
              You need to login to your account for show the jobs data. <br />
              <Link to="/login" className="text-sky-400 hover:underline">
                Login Here
              </Link>
            </h1>
          </div>
        </>
      )}
    </>
  );
}

export default AppliedJobs;
