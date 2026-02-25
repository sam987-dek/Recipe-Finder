import React from 'react'

const RecipeCard = React.memo(function RecipeCard({ mealId, title, posterurl, category, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
      <div className="relative h-96 w-64 border rounded-xl overflow-hidden flex flex-col">
        <div
          className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold rounded-full ${
            category === "Vegetarian"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {category === "Vegetarian" ? "Veg" : "Non-Veg"}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-2 right-2 text-2xl"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <img
          src={posterurl}
          alt={title}
          className="h-64 w-full object-cover"
        />
        <h2 className="text-center font-bold p-2">
          {title}
        </h2>
        <button
          onClick={onViewDetails}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200"
        >
          View Details
        </button>
      </div>
  );
});
export default RecipeCard