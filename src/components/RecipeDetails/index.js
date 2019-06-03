import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';
import Ingredient from '../../components/Ingredients';
import {estrellas} from '../../funcions/stars';
import { Link } from 'react-router-dom';

const RecipeDetails = ({title, _id,prep_time,chef,instructions,main_image,ingredients,rating}) =>(
  <article className="article__recdetalle">
    <div className="article__recdetalle-conteiner">
      <img className="img-detalle-rec" alt={title} src={main_image && main_image.url}/>       
      <h1 className="section__titulo">{title}</h1>

      <div className="article__recdetalle-desc">
        {estrellas(rating)}    
        <span className="span__prepTime">{prep_time}</span>

        <Link className="" to={`/chef/${chef && chef._id}`}>  
          <picture>
            <img className="img-chefs" src={chef && chef.image.url} alt={chef && chef.full_name}/>
          </picture>           
        </Link>

        <span className="link__cheffName"> By {chef.full_name} </span>

      </div>

      <div className="section__ingredients-conteiner">
        {ingredients.map((i) => {
          return(
                <Ingredient key={i._id} name={i.name} image={i.image} _id={i._id} alto="50" ancho="50"/>
          )
        })
      }
      </div>

      <ReactMarkdown key={_id} source={instructions} />
    </div>
  </article>

)    

export default RecipeDetails;