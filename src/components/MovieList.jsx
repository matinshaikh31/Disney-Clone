import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
// 



const MovieList = ({genreId}) => {
const[movieList,setMovieList]=useState([])

    useEffect(()=>{
getMovieByGenreId()
    },[])
    
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
  return (

    <div className='flex overflow-x-auto gap-8 pt-5 pb-5 px-3 no-scrollbar'>
    
        {movieList.map((item,i)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
    
  )
}



  

export default MovieList