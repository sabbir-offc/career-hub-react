import toast from "react-hot-toast";

const getStoredJobApplication = (job) => {
  const { id } = job;
  const storedJobApplication = [];
  const Applications = JSON.parse(localStorage.getItem("job-applications"));
  if (!Applications) {
    storedJobApplication.push(job);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
    return toast.success("You Applied Job Successfully.");
  } else {
    const isExists = Applications.find((job) => job.id === id);
    if (!isExists) {
      storedJobApplication.push(...Applications, job);
      localStorage.setItem(
        "job-applications",
        JSON.stringify(storedJobApplication)
      );
      return toast.success("You Applied Job Successfully.");
    } else {
      toast.error("You have already applied this job.");
    }
  }
};

export default getStoredJobApplication;
