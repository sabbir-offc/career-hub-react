import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex items-center gap-6 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="max-w-sm shadow-2xl p-8 md:w-96 rounded-lg  bg-base-100">
          <form className="flex flex-col  justify-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Login</button>
            </div>
            <div className="flex justify-between mt-1 text-lg">
              <p>New Here?</p>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
