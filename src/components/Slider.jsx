import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const SLider = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTopRatedMovie();
  }, []);

  const getTopRatedMovie = () => {
    GlobalApi.getTopRatedMovie.then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  return (
    <div>
      <Splide>
        {movieList.map((item, i) => (
          <SplideSlide className=" mb-0.5">
            <div className="flex  items-center justify-center  w-full h-auto px-16 py-4 scroll-smooth ">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                alt="Image"
                className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SLider;
