import { useLoaderData } from "react-router-dom";
import HeroPages from "../HeroPages/HeroPages";
import { Helmet } from "react-helmet";

const ManageSingleFood = () => {
  const food = useLoaderData();

  const {
    foodImage,
    foodName,
    userEmail,
    userName,
    userPhoto,
    requestDate,
    foodStatus,
  } = food;


  return (
    <div>
      <HeroPages name="Manage Single Food"></HeroPages>
      <div className="max-w-xl mx-auto p-5 md:p-4 lg:p-2 my-16">
        <Helmet>
          <title>Share Eats | Manage Single Food</title>
        </Helmet>
        {!userName ? (
          <p className="text-2xl lg:text-4xl font-bold text-center my-5 h-[200px] flex items-center">
            No one Requested for this Food Yet!!
          </p>
        ) : (
          <div className="shadow-xl rounded-xl hover:shadow-2xl">
            <img
              src={foodImage}
              className=" w-full h-[250px] rounded-tl-xl rounded-tr-xl"
              alt=""
            />
            <div className="p-4">
              <div className="mb-5 space-y-2">
                <h2 className="text-lg  font-bold">Food Name: {foodName}</h2>
              </div>
              <div>
                <h2 className="font-bold text-2xl text-center mb-5">
                  Requester Information
                </h2>
                <div className=" flex flex-col items-center">
                  <img
                    src={userPhoto}
                    className="h-[80px] rounded-full mb-5"
                    alt="userPhoto"
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
        )}
      </div>
    </div>
  );
};

export default ManageSingleFood;
