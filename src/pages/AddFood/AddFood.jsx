import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
const AddFood = () => {
  return (
    <div>
      <HeroPages name="Add Food"></HeroPages>
      <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
        <Helmet>
          <title>Share Eats | Add Food</title>
        </Helmet>
        <h2>This is AddFood</h2>
      </div>
    </div>
  );
};

export default AddFood;
