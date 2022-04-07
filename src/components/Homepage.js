import './Homepage.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Moviecard from './Moviecard';
import { Pagination } from '@material-ui/lab';

function Homepage() {

    const [moviesData, setMoviesData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pagenum, setPagenum] = useState(1);


    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US&page=${pagenum}`)
        .then(res=> setMoviesData(res.data.results));

        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8d84cfefa0aa377ba491b1918d7c70d9&language=en-US")
        .then(res => setGenres(res.data.genres));

       
        
    }, [pagenum]);

   


console.log(moviesData);



const handlePageChange = (e,page)=>{

    setPagenum(page);


}


console.log(pagenum);

    return (
        <div className="homepage">

       

     <div className="homepage_movies">


        {moviesData.map((movie)=>

           

             <Moviecard 

             className="moviecard"
             
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

       

     <div className="page_nav">
        <Pagination className="homepage_pagination" count={500} 
        color="secondary"
        size="large"

        onChange={handlePageChange}
       
         />

         </div>


      
        
      

      
            
        </div>
    )
}

export default Homepage
