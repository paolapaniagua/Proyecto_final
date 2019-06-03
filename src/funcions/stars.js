import React from 'react'
import './style.scss';
//funcion para mostrar estrellas
  export let estrellas = (rating) => 
    {
    switch(rating) {
        case 1: return <div><span className="span__estrella">★</span><span className="span__estrella_vacia">★★★★</span></div>;
        case 2: return <div><span className="span__estrella">★★</span><span className="span__estrella_vacia">★★★</span></div>;
        case 3: return <div><span className="span__estrella">★★★</span><span className="span__estrella_vacia">★★</span></div>;
        case 4: return <div><span className="span__estrella">★★★★</span><span className="span__estrella_vacia">★</span></div>;
        case 5: return <div><span className="span__estrella">★★★★★</span></div>
        default: return <div><span className="span__estrella">★★★★★</span></div>;    
        }
    }
    

