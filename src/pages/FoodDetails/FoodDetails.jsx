import { useLoaderData } from "react-router-dom";
import HeroPages from "../../components/HeroPages/HeroPages";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
  } = food;

  console.log("FoodDetails", food);

  return (
    <div>
      <HeroPages name="Food Details"></HeroPages>
      <div className="lg:max-w-7xl mx-auto flex gap-16 flex-col  justify-center items-center my-12 p-5 md:p-4 lg:p-2">
        <div className="flex flex-col justify-center items-center shadow-xl rounded-xl hover:shadow-2xl p-12">
          <h2 className="text-2xl mb-2 font-semibold">Donar Information</h2>
          <h3 className="font-semibold">Name: {donatorName}</h3>
          <p>Pickup Location: {pickupLocation}</p>
        </div>
        <div className="shadow-xl rounded-xl hover:shadow-2xl ">
          <img
            src={foodImage}
            className=" w-full  h-[170px] md:w-[500px] md:h-[300px] rounded-tl-xl rounded-tr-xl"
            alt=""
          />
          <div className="p-4">
            <div className="mb-5 space-y-2">
              <h2 className="text-lg  font-bold">{foodName}</h2>
              <p className="text-sm text-[#D70F64] font-bold">
                Quantity: {foodQuantity}
              </p>
              <p className="text-sm">Expired Date: {expiredDate}</p>
              <button className="btn bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] btn-block">Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
