import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Share Eats | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <Team></Team>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
