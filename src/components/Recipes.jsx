import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";

function Recipes({
  searchTerm,
  showFavorites,
  favorites = [],
  setFavorites = () => {},
}) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const navigate = useNavigate();


  const toggleFavorite = (meal) => {
    const exists = favorites.find((fav) => fav.idMeal === meal.idMeal);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  };

    useEffect(() => {
  async function getData() {
    try {
      setLoading(true);

      const ingredient =
        searchTerm && searchTerm.trim() !== ""
          ? searchTerm.trim()
          : "chicken"; 

      const filterResponse = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );

      const meals = filterResponse.data.meals || [];
 
      const fullMeals = await Promise.all(
        meals.map(async (meal) => {
          const detailResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          return detailResponse.data.meals[0];
        })
      );

      setRecipes(fullMeals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  getData();
}, [searchTerm]);

  const currentList = showFavorites ? favorites : recipes;

  const filteredList = currentList.filter((meal) => {
    const isVeg = meal.strCategory === "Vegetarian";

    if (filterType === "veg") return isVeg;
    if (filterType === "nonveg") return !isVeg;
    return true;
  });

  if (loading) {
    return (
      <>
        <Banner />
        <div className="flex justify-center items-center h-40 text-xl font-semibold">
          Loading recipes...
        </div>
      </>
    );
  }

  return (
    <>
      <Banner />

     
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setFilterType("all")}
          className={`px-4 py-2 rounded-full ${
            filterType === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-300" 
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilterType("veg")}
          className={`px-4 py-2 rounded-full ${
            filterType === "veg"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Veg
        </button>

        <button
          onClick={() => setFilterType("nonveg")}
          className={`px-4 py-2 rounded-full ${
            filterType === "nonveg"
              ? "bg-red-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Non-Veg
        </button>
      </div>

      
      <div className="flex flex-wrap justify-around mt-8 gap-8">
        {filteredList.length === 0 ? (
          <div className="w-full text-center text-xl font-semibold mt-10">
            Recipe not found 😔
          </div>
        ) : (
          filteredList.map((meal) => (
            <div key={meal.idMeal} className="w-80">
              <RecipeCard
                mealId={meal.idMeal}
                title={meal.strMeal}
                posterurl={meal.strMealThumb}
                category={meal.strCategory}
                isFavorite={favorites.some(
                  (fav) => fav.idMeal === meal.idMeal
                )}
                onToggleFavorite={() => toggleFavorite(meal)}
                onViewDetails={() => navigate(`/recipe/${meal.idMeal}`)}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Recipes;