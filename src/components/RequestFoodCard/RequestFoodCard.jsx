import PropTypes from "prop-types";

const RequestFoodCard = ({ food, handleDelete }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorName,
    pickupLocation,
    expiredDate,
    requestDate,
    donationMoney,
    foodStatus,
  } = food;

  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl ">
      <div className="p-4">
        <img
          src={foodImage}
          className=" w-full h-[250px] rounded-tl-xl rounded-tr-xl"
          alt=""
        />
        <div className=" space-y-2 mt-5">
          <h2 className="text-lg  font-bold">{foodName}</h2>
          <p className="text-[#D70F64] font-semibold">Status: {foodStatus}</p>
          <p className="font-semibold">Donator: {donatorName}</p>
          <p className="text-sm">Pickup Location: {pickupLocation}</p>
          <p className="text-sm">Expired Date: {expiredDate}</p>
          <p className="text-sm">Request Date: {requestDate}</p>
          <p className="text-sm">Donation Money: {donationMoney}</p>
        </div>

        <button
          onClick={() => handleDelete(_id)}
          disabled={foodStatus === 'Delivered'}
          className="btn bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] btn-block mt-4"
        >
          Cancel Request
        </button>
      </div>
    </div>
  );
};

RequestFoodCard.propTypes = {
  food: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RequestFoodCard;
