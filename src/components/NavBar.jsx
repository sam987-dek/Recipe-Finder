import React from "react";
import { FireIcon, HeartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function NavBar({ onShowAll, onShowFavorites, favoritesCount }) {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md py-4 px-10 flex justify-between items-center">

      <div
       onClick={() => {
        setTimeout(() => {
          navigate("/");
          onShowAll && onShowAll();
        }, 1000);
      }}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300"
      >
        <FireIcon className="w-7 h-7 text-orange-500" />
        <h1 className="text-2xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent tracking-wide">
          BeACook
        </h1>
      </div>


      <div className="flex items-center gap-8 text-gray-700 font-medium">

        <button
          onClick={onShowAll}
          className="hover:text-orange-500 transition duration-200"
        >
          All Recipes
        </button>

        <button
          onClick={onShowFavorites}
          className="flex items-center gap-1 hover:text-red-500 transition duration-200"
        >
          <HeartIcon className="w-5 h-5" />
          Favorites ({favoritesCount})
        </button>

      </div>

    </nav>
  );
}

export default NavBar;