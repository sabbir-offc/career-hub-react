import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <h3 className="text-5xl text-center my-10">Opps Not Found!</h3>
      <Link to="/" className="text-3xl btn btn-warning">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
