import React from 'react';
import Card from '../../components/Recipes';

const ChefDetails = ({ full_name,_id,recipes}) =>(
    <article className="article__chef-detalle">
        <div className="article__chef-detalle-conteiner">
        <h1 className="section__titulo">{full_name}</h1>    

        <h1>Recipes:</h1>
            
        </div>

        <div className="section__recipes-conteiner">
            {recipes.map(rec => 
                    <Card key={rec._id} title={rec.title} chef=""
                    _id={rec._id} prep_time={rec.prep_time} main_image={rec.main_image && rec.main_image}
                    desc="This is a preview Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit..."/>
            )}
        </div>

    </article>
)    

export default ChefDetails;