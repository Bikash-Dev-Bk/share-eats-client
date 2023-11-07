import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
  const {
    id,
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
    <div className="shadow-xl rounded-xl hover:shadow-2xl p-4">
      <img src={foodImage} className=" w-full h-[160px] rounded-lg" alt="" />
      <div className="my-5 space-y-2">
        <h2 className="text-2xl font-bold">{foodName}</h2>
        <p className="font-semibold">Quantity: {foodQuantity}</p>
        <p className="font-semibold">Pickup Location: {pickupLocation}</p>
        <p className="font-semibold">Expired Date: {expiredDate}</p>
        <p className="font-semibold">Additional Notes: {additionalNotes}</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={donatorImage} className="h-[40px] rounded-full" alt="" />
        <p className="font-semibold">Donator: {donatorName}</p>
      </div>
      <button className="btn btn-accent btn-block mt-4">View Detail</button>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;
