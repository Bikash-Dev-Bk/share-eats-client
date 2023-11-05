import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;