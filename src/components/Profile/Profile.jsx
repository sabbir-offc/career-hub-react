import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { profileUpdate } = useAuth();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    profileUpdate(name, image)
      .then(() => {
        toast.success(
          "Your profile updated successfull. Please refresh the page for updating your details."
        );
        e.target.reset();
      })
      .catch(() => {
        toast.error("Sorry, we cannot update your profile.");
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-center">
        Update Your Profile
      </h1>
      <form
        className="w-3/5 mx-auto text-center"
        onSubmit={handleUpdateProfile}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            required
            className="input input-bordered"
          />
        </div>
        <button className="btn btn-neutral" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
