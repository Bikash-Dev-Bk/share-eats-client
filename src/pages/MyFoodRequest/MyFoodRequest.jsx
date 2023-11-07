import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
const MyFoodRequest = () => {
  return (
    <div>
      <HeroPages name="My Food Request"></HeroPages>
      <div>
        <Helmet>
          <title>Share Eats | My Food Request</title>
        </Helmet>
        <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
          <h2>This is MyFoodRequest</h2>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
