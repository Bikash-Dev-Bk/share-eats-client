import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Modal = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    donatorEmail,
    pickupLocation,
    expiredDate,
    additionalNotes,
  } = food;

  const { user } = useContext(AuthContext);

  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleFoodRequest = (event) => {
    event.preventDefault();

    const form = event.target;

    const userEmail = user?.email;
    const requestDate = form.req_date.value;
    const donationMoney = form.donation_money.value;
    const additionalNotes = form.additional_notes.value;

    const food = {
      foodImage,
      foodName,
      donatorImage,
      donatorName,
      donatorEmail,
      pickupLocation,
      expiredDate,
      additionalNotes,
      userEmail,
      requestDate,
      donationMoney
    };

    console.log(food);

    form.reset();

    fetch("http://localhost:5000/foodrequests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Requested Food",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <dialog id="req_food" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleFoodRequest} className="">
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="food_name"
            >
              Food Name
            </label>
            <input
              className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
              name="food_name"
              type="text"
              defaultValue={foodName}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="food_image"
            >
              Food Image URL
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="food_image"
              type="text"
              defaultValue={foodImage}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="food_id"
            >
              Food ID
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="food_id"
              type="text"
              defaultValue={_id}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="donator_email"
            >
              Donator Email
            </label>
            <input
              className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
              name="donator_email"
              type="text"
              defaultValue={donatorEmail}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="donator_name"
            >
              Donator Name
            </label>
            <input
              className="ring-1 rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight  focus:ring-2 focus:ring-[#D70F64]"
              name="donator_name"
              type="text"
              defaultValue={donatorName}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="user_email"
            >
              User email
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="user_email"
              type="text"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="req_date"
            >
              Request Date
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="req_date"
              type="text"
              defaultValue={formattedDate}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="pickup_location"
            >
              Pickup Location
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="pickup_location"
              type="text"
              defaultValue={pickupLocation}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="expired_date"
            >
              Expired Date
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="expired_date"
              type="text"
              defaultValue={expiredDate}
              readOnly
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="donation_money"
            >
              Donation Money
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="donation_money"
              type="text"
              placeholder="Enter Donation Money"
              required
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="additional_notes"
            >
              Additional Notes
            </label>
            <textarea
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="additional_notes"
              rows="3"
              defaultValue={additionalNotes}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Request"
              className="btn rounded-xl  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64] px-10"
            />
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  food: PropTypes.object.isRequired,
};

export default Modal;
