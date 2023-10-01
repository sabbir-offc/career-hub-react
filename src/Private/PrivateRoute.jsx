import { Navigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center text-center justify-center">
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
