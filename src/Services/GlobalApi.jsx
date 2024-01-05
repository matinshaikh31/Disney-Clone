import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key  ="f0380ef0146c6d343d9e95bb674da5c9"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// https://api.themoviedb.org/3/movie/top_rated?api_key=f0380ef0146c6d343d9e95bb674da5c9

const getTopRatedMovie =  axios.get(movieBaseUrl+"/movie/top_rated?api_key="+api_key)
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)





export default {
    getTopRatedMovie,
    getMovieByGenreId
}