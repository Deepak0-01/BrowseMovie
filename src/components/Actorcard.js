import React from 'react';
import './Actorcard.css';

function Actorcard({profile_path,name}) {
    let actor_profile =   "https://image.tmdb.org/t/p/w200"+ profile_path;
    return (
        <div className="actorcard">
        

       {profile_path?<img src={actor_profile} alt={name}/>:""}
       {profile_path? <h4 className="actor_name">{name}</h4>:""}

    
            
        </div>
    )
}

export default Actorcard
