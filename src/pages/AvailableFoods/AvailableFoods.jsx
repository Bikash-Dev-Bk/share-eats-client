import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "../../components/FoodCard/FoodCard";
import HeroPages from "../../components/HeroPages/HeroPages";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setAvailableFoods(data));
  }, []);

  const handleSearch = () => {
    const filtered = availableFoods.filter((food) =>
      food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      <HeroPages name="Available Foods"></HeroPages>
      <div className="max-w-7xl mx-auto my-12 p-5 md:p-4 lg:p-2">
        <Helmet>
          <title>Share Eats | AvailableFoods</title>
        </Helmet>

        {/* search */}
        <div className="mb-4 max-w-3xl mx-auto flex gap-2 justify-between items-center">
          <input
            type="text"
            className=" rounded w-full py-3 px-3  bg-transparent outline-none leading-tight  ring-2 ring-[#D70F64]"
            placeholder="Search Your Food"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="btn rounded-xl  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64] px-10"
          >
            Search
          </button>
        </div>

        {filteredFoods.length === 0 ? (
          <p className="text-xl md:text-3xl font-bold text-center text-[#D70F64] my-12" >
            No matching results found.
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
            {filteredFoods.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
