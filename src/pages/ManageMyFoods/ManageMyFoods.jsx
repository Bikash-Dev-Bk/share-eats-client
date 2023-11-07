import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
const ManageMyFoods = () => {
  return (
    <div>
      <HeroPages name="Manage My Foods"></HeroPages>
      <div>
        <Helmet>
          <title>Share Eats | Manage My Foods</title>
        </Helmet>
        <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
          <h2>This is ManageMyFoods</h2>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
