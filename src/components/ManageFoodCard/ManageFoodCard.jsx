import PropTypes from "prop-types";

const ManageFoodCard = ({ manageFood }) => {
  const {
    foodImage,
    foodName,
    userEmail,
    userName,
    userPhoto,
    requestDate,
    foodStatus,
  } = manageFood;

  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl">
      <img
        src={foodImage}
        className=" w-full h-[150p] md:h-[250px] rounded-tl-xl rounded-tr-xl"
        alt=""
      />
      <div className="p-4">
        <div className="mb-5 space-y-2">
          <h2 className="text-lg text-center font-bold">Food Name: {foodName}</h2>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-center mb-5">
            Requester Information
          </h2>
          <div className=" flex flex-col items-center">
            <img
              src={userPhoto}
              className="h-[80px] rounded-full mb-5"
              alt="Requester Photo"
            />
            <div className="space-y-2 text-center">
              <p className="font-semibold">Name: {userName}</p>
              <p className="text-sm">Email: {userEmail}</p>
              <p className="text-sm">Request Date: {requestDate}</p>
            </div>
            <button className="btn bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] mt-4">
              {foodStatus}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ManageFoodCard.propTypes = {
  manageFood: PropTypes.object.isRequired,
};

export default ManageFoodCard;
