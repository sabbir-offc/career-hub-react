import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"> Continue With</div>
      <button className="flex items-center justify-around text-2xl bg-gray-800 text-white font-semibold px-4 py-3 rounded-md w-full">
        <FcGoogle></FcGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;
