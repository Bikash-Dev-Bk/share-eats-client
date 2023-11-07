import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const [userDb, setUserDb] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserDb(data));
  }, [user?.email]);

  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const foodQuantity = form.food_quantity.value;
    const pickupLocation = form.pickup_location.value;
    const expiredDate = form.expired_date.value;
    const foodStatus = form.food_status.value;
    const additionalNotes = form.additional_notes.value;
    const donatorImage = userDb.photo;
    const donatorName = userDb.name;
    const donatorEmail = userDb.email;

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

    fetch("http://localhost:5000/foods", {
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
            text: "Successfully Added Product",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <HeroPages name="Add Food"></HeroPages>

      <div className="max-w-5xl mx-auto p-5 md:p-4 lg:p-2 ">
        <Helmet>
          <title>Share Eats | Add Food</title>
        </Helmet>

        <form
          onSubmit={handleAddFood}
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
              placeholder="Enter Food Name"
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
              placeholder="Enter Food image URL"
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
              placeholder="Enter Food Quantity"
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
              placeholder="Enter Pickup Location"
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
              defaultValue="Available"
              placeholder="Enter Pickup Location"
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
              placeholder="2023-12-10"
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
              placeholder="Enter Additional Notes"
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
              defaultValue={userDb.email}
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
              defaultValue={userDb.name}
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
              defaultValue={userDb.photo}
              readOnly
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Add Food"
              className="btn rounded-xl  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64] px-10 mt-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
