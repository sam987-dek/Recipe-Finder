import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading recipe...
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Recipe not found 😔
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`] || ""}`
      );
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>

      <p className="mb-2">
        <strong>Category:</strong> {meal.strCategory}
      </p>

      <p className="mb-6">
        <strong>Area:</strong> {meal.strArea}
      </p>

      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc pl-6 mb-6">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="leading-7 whitespace-pre-line mb-6">
        {meal.strInstructions}
      </p>

      {meal.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-3">Video Tutorial</h2>
          <iframe
            className="w-full h-96 rounded-xl"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;