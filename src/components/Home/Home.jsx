import Banner from "../UIPages/Banner/Banner";
import CategoryList from "../UIPages/CategroyList/CategoryList";
import FeaturedJobs from "../UIPages/FeaturdeJobs/FeaturedJobs";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
