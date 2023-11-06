import { useState, useEffect } from "react";
import FoodCard from "./FoodCard/FoodCard";

const FeaturedFoods = () => {

  const [fFood, setFFood] = useState([]);

  useEffect(() => {
    fetch("f.json")
      .then((res) => res.json())
      .then((data) => setFFood(data));
  }, []);

//   console.log('food',fFood)

  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">FeaturedFoods</h2>
      <p className="max-w-4xl mx-auto text-center text-lg mt-5 mb-24 p-5 md:p-4 lg:p-2">
        At Share Eats, we believe that every great initiative is powered by the
        people behind it. Our team is a diverse group of passionate individuals
        who share a common goal - to reduce food waste and ensure that no one in
        our community goes hungry. Get to know the faces and stories that drive
        our mission forward.
      </p>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-20 p-5 md:p-4 lg:p-2">
        {fFood.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>

    </div>
  );
};

export default FeaturedFoods;
