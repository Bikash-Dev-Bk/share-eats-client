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

  console.log('food',food)
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img src={foodImage} className="border-4 border-black rounded-full" alt="" />
      <h2 className="text-2xl font-bold">{foodName}</h2>
      <p className="font-semibold">{foodQuantity}</p>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;
