import { useEffect, useState } from "react";
import AppliedJobDetails from "./AppliedJobDetails";

function AppliedJobs() {
  const [jobCard, setJobCard] = useState([]);
  const [notFound, setNotFound] = useState(null);
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
      <div className="container mx-auto flex flex-col gap-7 mb-32">
        {jobCard.map((job) => (
          <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;
