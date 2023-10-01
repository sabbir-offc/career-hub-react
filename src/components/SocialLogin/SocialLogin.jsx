import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSign } = useAuth();
  const handleSign = () => {
    googleSign()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider"> Continue With</div>
      <button
        onClick={handleSign}
        className="flex items-center justify-around text-2xl bg-gray-800 text-white font-semibold px-4 py-3 rounded-md w-full"
      >
        <FcGoogle></FcGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;
