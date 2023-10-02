import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSign, githubSign } = useAuth();
  const navigate = useNavigate();
  const handleSign = (media) => {
    media()
      .then(() => {
        toast.success("Sign in Successfull.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sign in failed, Please try again.");
        navigate("/");
      });
  };
  return (
    <div>
      <div className="divider"> Continue With</div>
      <div className="space-y-3 my-5">
        <button
          onClick={() => handleSign(googleSign)}
          className="flex items-center justify-around text-lg md:text-2xl bg-gray-800 text-white font-semibold px-4 py-3 rounded-md w-full"
        >
          <FcGoogle></FcGoogle> Sign In With Google
        </button>
        <button
          onClick={() => handleSign(githubSign)}
          className="flex items-center justify-around text-lg md:text-2xl bg-gray-800 text-white font-semibold px-4 py-3 rounded-md w-full"
        >
          <BsGithub></BsGithub> Sign In With Gihub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
