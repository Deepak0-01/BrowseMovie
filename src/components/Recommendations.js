import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMovie } from '../features/movieSlice';
import Moviecard from './Moviecard';
import './Recommendations.css';

function Recommendations() {

    const movie =  useSelector(selectMovie);
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    const url = `
    https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US&page=1`;

    useEffect(()=>{

        axios.get(url).then(res=>setMovies(res.data.results));
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US")
        .then(res => setGenres(res.data.genres));


    },[movie.id]);

 console.log(movies);
    return (

       
        <div className="recommendation__movies">

       { movies.map((movie)=>

           

        <Moviecard 

        className="moviecard"
        className="recom_movie"
        
        key={movie.id}
         id={movie.id} 
         title={movie.title} 
         backdrop_path={movie.backdrop_path} 
         poster_path={movie.poster_path}
         overview={movie.overview}
         release_date ={movie.release_date}
         genre_ids ={movie.genre_ids}
         genres= {genres}
         />

       
   )}

            
        </div>
      
    )
}

export default Recommendations
