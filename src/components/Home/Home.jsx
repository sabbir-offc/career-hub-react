import Banner from "../UIPages/Banner/Banner";
import CategoryList from "../UIPages/CategroyList/CategoryList";
import FeaturedJobs from "../UIPages/FeaturdeJobs/FeaturedJobs";
import "/src/common.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
