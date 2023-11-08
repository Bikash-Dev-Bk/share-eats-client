import { Helmet } from "react-helmet";
import HeroPages from "../../components/HeroPages/HeroPages";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyTable from "../../components/MyTable/MyTable";
const ManageMyFoods = () => {

  const { user } = useContext(AuthContext);

  const [manageMyFoods, setManageMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setManageMyFoods(data));
  }, [user?.email]);

  console.log("manageMyFoods", manageMyFoods);

  const columns = [
    { Header: "Food Name", accessor: "foodName" },
    { Header: "Food Quantity", accessor: "foodQuantity" },
    { Header: "Pickup Location", accessor: "pickupLocation" },
  ];

  return (
    <div>
      <HeroPages name="Manage My Foods"></HeroPages>
      <div>
        <Helmet>
          <title>Share Eats | Manage My Foods</title>
        </Helmet>
        <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
          <MyTable columns={columns} data={manageMyFoods} />
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
