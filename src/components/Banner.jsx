import React from "react";

function Banner() {
  return (
    <div className="mt-12 px-6">
      <div className="relative h-96 md:h-105 rounded-3xl overflow-hidden shadow-2xl">

    
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Delicious Dish"
          className="absolute inset-0 w-full h-full object-cover"
        />

       
        <div className="absolute inset-0 bg-black/55"></div>

      
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
            BeACook
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-white/90">
            Cook. Create. Enjoy.
          </p>

          <p className="mt-2 text-sm md:text-base text-white/80">
            Discover amazing recipes and turn ingredients into magic.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Banner;