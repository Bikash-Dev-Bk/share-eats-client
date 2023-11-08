import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyTable from "../../components/MyTable/MyTable";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);

  const [manageMyFoods, setManageMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setManageMyFoods(data));
  }, [user?.email]);

  const columns = [
    { Header: "Food Name", accessor: "foodName" },
    { Header: "Food Quantity", accessor: "foodQuantity" },
    { Header: "Pickup Location", accessor: "pickupLocation" },
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D70F64",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Successfully Deleted Food!",
                icon: "success",
                confirmButtonText: "OK",
              });

              const remaining = manageMyFoods.filter((food) => food._id !== id);
              setManageMyFoods(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <HeroPages name="Manage My Foods"></HeroPages>
      <div>
        <Helmet>
          <title>Share Eats | Manage My Foods</title>
        </Helmet>
        {manageMyFoods.length === 0 ? (
          <p className="text-4xl font-bold text-center my-5">
            You Haven't Add Any Food Yet!!
          </p>
        ) : (
          <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
            <MyTable
              columns={columns}
              data={manageMyFoods}
              handleDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyFoods;
