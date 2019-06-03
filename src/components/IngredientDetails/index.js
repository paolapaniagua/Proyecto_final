import React from 'react';
import Card from '../../components/Recipes';
import routes from '../../routes';
import noPicture from '../../assets/images/default.jpg';
import './style.scss';

const IngredientDetails = ({ name,recipes,_id,image}) =>(
    <article className="article__ing-detalle">
        <div className="article__ing-detalle-conteiner">
            <picture className="picture-ing-detalle">
                {!(image && image.url) 
                ? <a href={`${routes.INGREDIENTS}/${_id}`}> <img className="img-ing-detalle" alt="imagen no encontrada" src={noPicture}/></a> 
                : <a href={`${routes.INGREDIENTS}/${_id}`}> <img className="img-ing-detalle" alt={name} src={image && image.url}/></a>
                }
            </picture>
        </div>
        
        <h1 className="section__titulo">{name}</h1>    

        <h2>Recipes:</h2>
        
        <div className="section__recipes-conteiner">
            {recipes.map(rec => 
                    <Card key={rec._id} title={rec.title} chef=""
                    _id={rec._id} prep_time={rec.prep_time} main_image={rec.main_image && rec.main_image}
                    desc="This is a preview Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit..."/>
            )}
        </div>
    </article>
)    

export default IngredientDetails;