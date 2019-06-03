import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import '../../funcions/stars'
import {estrellas} from '../../funcions/stars';

const Card = ({title,_id,chef,main_image,prep_time,desc,textoBy,rating}) =>(
    <React.Fragment>
        <div className="section__recipes__item">
            <article className="article__receta-vistaprev">            
                <a href={`/recipe/${_id}`}>
                    <picture className="article__receta-vistaprev-picture">
                        <img className="img-receta" src={main_image.url} alt={title}/>
                    </picture>
                    <h1 className="recipe-title">{title}</h1>
                </a>
        
                <div className="article__receta-vistaprev-rating">    
                    {estrellas(rating)} 
                    <span className="span__prepTime">{prep_time}</span>
                </div>
                
                <div className="article__receta-vistaprev-desc">
                    {desc}
                </div>
        
                <Link className="article__receta-vistaprev-link" to={`/chef/${chef && chef._id}`}>
                    <span className="link_informChef">
                        <picture>
                            <img className="img-chefs" src={chef && chef.image.url} alt={chef && chef.full_name}/>
                        </picture>
                        <span className="link__cheffName">{textoBy} {chef && chef.full_name}</span>
                    </span>
                </Link>
            </article>    
        </div>
    </React.Fragment>
)    

export default Card;