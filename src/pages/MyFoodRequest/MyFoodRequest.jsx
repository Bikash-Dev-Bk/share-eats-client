import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState, useEffect } from "react";
import RequestFoodCard from "../../components/RequestFoodCard/RequestFoodCard";
import Swal from "sweetalert2";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);

  const [myRequestFoods, setMyRequestFoods] = useState([]);

  useEffect(() => {
    fetch(`https://share-eats-server.vercel.app/foodrequests/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyRequestFoods(data));
  }, [user?.email]);

  const handleCancelRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D70F64",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://share-eats-server.vercel.app/foodrequests/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Successfully Canceled Request!",
                icon: "success",
                confirmButtonColor: "#D70F64",
                confirmButtonText: "OK",
              });

              const remaining = myRequestFoods.filter(
                (food) => food._id !== id
              );
              setMyRequestFoods(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <HeroPages name="My Food Request"></HeroPages>

      <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
        <Helmet>
          <title>Share Eats | My Food Request</title>
        </Helmet>
        {myRequestFoods.length === 0 ? (
          <p className="text-4xl font-bold text-center my-5">
            You Haven't Requested Any Food Yet!!
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 ">
            {myRequestFoods.map((food) => (
              <RequestFoodCard
                key={food._id}
                food={food}
                handleCancelRequest={handleCancelRequest}
              ></RequestFoodCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequest;
