import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

function AppliedJobs() {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter();
    }
  }, []);
  return <div>Jobs</div>;
}

export default AppliedJobs;
