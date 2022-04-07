import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovie } from '../features/movieSlice'
import MoviePage from './MoviePage';

function Movie() {

    const movie = useSelector(selectMovie);

    let background_url = "https://image.tmdb.org/t/p/original"+ movie.backdrop_path;
  
   


    return (
        <div className="movie"

        style={{
           
            
           backgroundSize:"cover",
            width:"100%",
           
          
            height:"100vh",
            
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0, .5)), url("${background_url}")`
          }}
        
        >

     
     
        
      <MoviePage/>



            
        </div>
    )
}

export default Movie
