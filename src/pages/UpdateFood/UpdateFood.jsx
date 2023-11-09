import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
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
  

  const handleUpdateFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const foodQuantity = form.food_quantity.value;
    const pickupLocation = form.pickup_location.value;
    const expiredDate = form.expired_date.value;
    const foodStatus = form.food_status.value;
    const additionalNotes = form.additional_notes.value;
    const donatorImage = form.donator_image.value;
    const donatorName = form.donator_name.value;
    const donatorEmail = form.donator_email.value;

    const food = {
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
    };

    console.log(food);

    form.reset();

    fetch(`http://localhost:5000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Update Food",
            icon: "success",
            confirmButtonColor: "#D70F64",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <HeroPages name="Update Food"></HeroPages>

      <div className="max-w-5xl mx-auto p-5 md:p-4 lg:p-2 ">
        <Helmet>
          <title>Share Eats | Update Food</title>
        </Helmet>

        <form
            onSubmit={handleUpdateFood}
          className="shadow-lg shadow-[#D70F64] rounded-xl mb-24 lg:px-2 px-5 pt-6 pb-8 hover:shadow-2xl hover:shadow-[#D70F64] mt-10"
        >
          {/* Food Info  */}
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
              required
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
              required
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="food_quantity"
            >
              Food Quantity
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="food_quantity"
              type="number"
              defaultValue={foodQuantity}
              required
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
              required
            />
          </div>
          <div className="mb-4 max-w-screen-xl mx-auto lg:px-10">
            <label
              className="block text-[#D70F64] font-bold mb-2"
              htmlFor="food_status"
            >
              Food Status
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="food_status"
              type="text"
              defaultValue={foodStatus}
              readOnly
              required
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
              required
            ></textarea>
          </div>

          {/* Donator Info  */}
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
              htmlFor="donator_image"
            >
              Donator Image URL
            </label>
            <input
              className=" rounded w-full py-2 px-3 ring-gray-300 bg-transparent outline-none leading-tight ring-1 focus:ring-2 focus:ring-[#D70F64]"
              name="donator_image"
              type="text"
              defaultValue={donatorImage}
              readOnly
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Update Food"
              className="btn rounded-xl  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64] px-10 mt-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
