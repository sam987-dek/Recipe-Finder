import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import Recipes from "../components/Recipes";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const resetToDefault = () => {
    setRefreshing(true);

    setTimeout(() => {
      setSearchTerm("");
      setShowFavorites(false);
      setRefreshing(false);
    }, 1000);
  };

  if (refreshing) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Refreshing...
      </div>
    );
  }

  return (
    <div>
      <NavBar
        onShowAll={resetToDefault}
        onShowFavorites={() => {
          setSearchTerm("");
          setShowFavorites(true);
        }}
        favoritesCount={favorites.length}
      />

      <SearchBar onSearch={setSearchTerm} />

      <Recipes
        searchTerm={searchTerm}
        showFavorites={showFavorites}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default Home;