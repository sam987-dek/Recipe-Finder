import React, { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (trimmed === "") return;
    onSearch(trimmed);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='relative flex justify-center mt-10'>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Search the food...'
          className='
            focus:ring-2 transition duration-300 hover:scale-105 focus:outline-none
            bg-linear-to-r from-sky-600 to-cyan-300
            text-center w-64 h-12 rounded-full p-2 text-black
          '
        />
        <MagnifyingGlassIcon
          onClick={handleSearch}
          className="h-6 w-6 absolute right-3 top-3 cursor-pointer text-black"
        />
      </div>
    </div>
  )
}

export default SearchBar