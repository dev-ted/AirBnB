import React from "react";
import Image from "next/image";

function CardSmall({ img, location, distance }) {
  return (
    <div className = " flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-16 w-16">
     
        <Image className = "rounded-lg" src={img} layout="fill" />
      </div>

      <div>
        <p>{location}</p>
        <small className= "text-gray-500">{distance}</small>
      </div>
    </div>
  );
}

export default CardSmall;
