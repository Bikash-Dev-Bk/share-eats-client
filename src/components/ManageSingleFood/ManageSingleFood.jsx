import { useLoaderData } from "react-router-dom";
import HeroPages from "../HeroPages/HeroPages";
import { Helmet } from "react-helmet";

const ManageSingleFood = () => {
  const food = useLoaderData();

  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    donatorEmail,
    foodQuantity,
    pickupLocation,
    foodStatus,
    expiredDate,
    additionalNotes,
  } = food;

  return (
    <div>
      <HeroPages name="Manage Single Food"></HeroPages>
      <div className="max-w-5xl mx-auto p-5 md:p-4 lg:p-2 ">
        <Helmet>
          <title>Share Eats | Manage Single Food</title>
        </Helmet>
      </div>
      
    </div>
  );
};

export default ManageSingleFood;
