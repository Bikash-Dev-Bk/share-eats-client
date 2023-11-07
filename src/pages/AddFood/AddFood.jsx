import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
const AddFood = () => {
  return (
    <div>
      <HeroPages name="Add Food"></HeroPages>

      <div className="max-w-5xl mx-auto p-5 md:p-4 lg:p-2 ">
        <Helmet>
          <title>Share Eats | Add Food</title>
        </Helmet>

        <form className="shadow-lg shadow-[#D70F64] rounded-xl mb-24 lg:px-2 px-5 pt-6 pb-8 hover:shadow-2xl hover:shadow-[#D70F64] mt-10">
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
              defaultValue="xyz@gmail.com"
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
              defaultValue="xyz"
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
              defaultValue="abc"
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
