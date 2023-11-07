import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
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


  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl ">
      <img
        src={foodImage}
        className=" w-full h-[250px] rounded-tl-xl rounded-tr-xl"
        alt=""
      />
      <div className="p-4">
        <div className="mb-5 space-y-2">
          <h2 className="text-lg  font-bold">{foodName}</h2>
          <p className="text-sm text-[#D70F64] font-bold">
            Quantity: {foodQuantity}
          </p>
          <p className="text-sm">Pickup Location: {pickupLocation}</p>
          <p className="text-sm">Expired Date: {expiredDate}</p>
          <p className="text-sm">Additional Notes: {additionalNotes}</p>
        </div>
        <div className="flex gap-3 items-center">
          <img src={donatorImage} className="h-[40px] rounded-full" alt="" />
          <p className="font-semibold">Donator: {donatorName}</p>
        </div>
        <Link to={`/food/${_id}`} >
          <button className="btn bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] btn-block mt-4">
            View Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;
