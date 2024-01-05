import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import national from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouselist = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: national,
      video: nationalV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];

  return (
    <div className="grid grid-flow-col  gap:2 p-2 px-5 md:gap-5  md:px-24  ">
      {productionHouselist.map((item) => (
        <div className="border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-gray-800">
        <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 transition-delay-200"
          />
          <img src={item.image} className="w-full z-[1] " />
        
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
