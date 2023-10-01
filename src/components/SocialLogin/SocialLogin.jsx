import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSign } = useAuth();
  const navigate = useNavigate();
  const handleSign = (media) => {
    media()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider"> Continue With</div>
      <button
        onClick={() => handleSign(googleSign)}
        className="flex items-center justify-around text-lg md:text-2xl bg-gray-800 text-white font-semibold px-4 py-3 rounded-md w-full"
      >
        <FcGoogle></FcGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;
