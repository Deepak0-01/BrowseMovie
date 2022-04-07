import axios from 'axios';
import React, {useState, useEffect,Component } from 'react';
import { useSelector } from 'react-redux';
import { selectMovie } from '../features/movieSlice';

import './MovieImages.css';



import Slider from "react-slick";

function MovieImages() {
    const [movieimages, setMovieimages] = useState([]);
    const movie = useSelector(selectMovie);

   
   

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US`,{
            params:{
                language:"null"
            }
        })
        .then(res=>setMovieimages(res.data.backdrops));


    },[movie.id]);
    console.log(movieimages);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  
    
   let ourl = "https://image.tmdb.org/t/p/w500";
   let turl = "https://image.tmdb.org/t/p/w200";

   let num=1;
 
 

   
   
  

  

 
  




      return  movieimages.length > 0 ? (
     <div className="movie_gallery">
     {movieimages.map(img=>(
        
       <div className="movie_gallery--img">
       <img src= {ourl+img.file_path} alt="movie-img" loading="lazy"/>
   
       </div>
    
      
     
      ))}
    
     </div>)
     
     :null;
      
    
}

export default MovieImages
