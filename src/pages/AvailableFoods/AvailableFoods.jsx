import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "../../components/FoodCard/FoodCard";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setAvailableFoods(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
      <Helmet>
        <title>Share Eats | AvailableFoods</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center">Available Foods</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 ">
        {availableFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
