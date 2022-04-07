import axios from 'axios';
import { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie, selectMovie } from '../features/movieSlice';


function Moviecard({key,id,title,backdrop_path,poster_path,overview,release_date,genre_ids,genres}) {
    const dispatch = useDispatch();

    const movie = useSelector(selectMovie);
    const moviegenres = [] ;

    console.log(genres);
    console.log(genre_ids);

    function findGenre(genreid){

        genres.map((genre)=> genre.id===genreid? moviegenres.push(genre.name):"");
    }

    genre_ids.forEach(genreid => {

        findGenre(genreid);
        
    });

    



    console.log(moviegenres);

  
   

   let url = "https://image.tmdb.org/t/p/w200"+ poster_path;

   const handleMovieCard = ()=>{

  



    dispatch(addMovie({
        
        id:id,
        title:title,
        backdrop_path:backdrop_path,
        poster_path:poster_path,
        overview:overview,
        release_date:release_date,
        moviegenres:moviegenres
        





    }))





   }


   


    return (

    

      
        <div onClick={handleMovieCard} className="moviecard">

        <Link to={"/movie/"+id}>
         
       
       <img classname="movicard_img" src= {url}/>

       <p style={{width:"100px;"}}>{title}</p>

       <div className="moviecard_genre">

     

       {moviegenres.map(gen=> <span style={{fontSize:"12px",margin:"2px"}}>{gen} </span>) }

      

       </div>

       </Link>
       
        </div>
 
      

     
      
    )
}

export default Moviecard
