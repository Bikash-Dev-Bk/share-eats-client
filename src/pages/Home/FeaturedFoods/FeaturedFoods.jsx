import { useState, useEffect } from "react";
import FoodCard from "./FoodCard/FoodCard";

const FeaturedFoods = () => {
  const [featuredFood, setFeaturedFood] = useState([]);

  useEffect(() => {
    fetch("f.json")
      .then((res) => res.json())
      .then((data) => setFeaturedFood(data));
  }, []);

  //   console.log('food',fFood)

  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">Featured Foods</h2>
      <p className="max-w-4xl mx-auto text-center text-lg mt-5 mb-24 ">
        Discover a delectable selection of handpicked dishes that exemplify the
        essence of our food-sharing community. Our "Featured Foods" are the
        heart and soul of our mission, showcasing the diverse flavors,
        generosity, and unity that define our platform.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 ">
        {featuredFood.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
