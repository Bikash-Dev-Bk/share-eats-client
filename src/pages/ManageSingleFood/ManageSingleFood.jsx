import { useLoaderData } from "react-router-dom";
import HeroPages from "../../components/HeroPages/HeroPages";
import { Helmet } from "react-helmet";
import ManageFoodCard from "../../components/ManageFoodCard/ManageFoodCard";

const ManageSingleFood = () => {
  const manageFoods = useLoaderData();

  console.log("ManageSingleFood", manageFoods);

  return (
    <div>
      <HeroPages name="Manage Single Food"></HeroPages>
      <div className="max-w-7xl mx-auto p-5 md:p-4 lg:p-2 my-16">
        <Helmet>
          <title>Share Eats | Manage Single Food</title>
        </Helmet>
        {manageFoods.length === 0 ? (
          <p className="text-2xl lg:text-4xl font-bold text-center my-5 h-[200px] flex items-center">
            No one Requested for this Food Yet!!
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-3 lg:my-20 ">
            {manageFoods.map((manageFood) => (
              <ManageFoodCard
                key={manageFood._id}
                manageFood={manageFood}
              ></ManageFoodCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSingleFood;
