import { useSelector } from 'react-redux';
import { selectMovie } from '../features/movieSlice';
import {ClockCircleOutlined,DownCircleOutlined} from '@ant-design/icons';
import './MoviePage.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Actorcard from './Actorcard';
import MovieImages from './MovieImages';
import Recommendations from './Recommendations';

function MoviePage() {
    const [actors, setActors] = useState([]);

    const movie = useSelector(selectMovie);

    let background_url = "https://image.tmdb.org/t/p/original"+ movie.backdrop_path;
    let poster_url = "https://image.tmdb.org/t/p/w300"+ movie.poster_path;
    let actors_url = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US`;

    useEffect(()=>{

         axios.get(actors_url,{
             params:{
                 _limit:30
             }
             }
         )
        .then(res=> setActors(res.data.cast));

    },[movie.id]);

    console.log(actors);
   

    return (
        <div className="moviepage">

        <div className="moviepage_details">

        <div className="moviepage_details--image">

        <img className="movie_img" src={poster_url} alt="movie.title"/>
        
        </div>
        
        <div className="moviepage_details--info">

        <div className="moviepage_details--info-title">
        <h1>{movie.title}</h1>
        
        </div>

        <div className="moviepage_details--info-watchlistbtn">
       
           <button>  Add To My Watchlist</button>
        
        </div>

        <div className="moviepage_details--info-overview">
          <p>{movie.overview}</p>
        
        </div>

        <div className="moviepage_details--info-genres">
        
        
        <h3>Genres:</h3>
     
        {movie.moviegenres.map(genre=><span className="genre">{genre}</span>)}
      
        
      
      
      </div>

      <div className="moviepage_details--info-botttom">

      <div>

      <ClockCircleOutlined className="clock" />
      <span>Release Date : {movie.release_date}</span>
      
      </div>


      
      </div>





        
        </div>
        
        </div>
        <h1 className="actors_header">ACTORS</h1>

        <div className="moviepage_actors">

        

        {actors.map(actor=> <Actorcard profile_path = {actor.profile_path} name={actor.name}/>)}

        
        
        </div>

        <h1 className="actors_header">GALLERY</h1>

        <MovieImages/>
        <h1 className="actors_header">RECOMMENDATIONS</h1>

        <Recommendations/>

            
        </div>
    )
}

export default MoviePage
