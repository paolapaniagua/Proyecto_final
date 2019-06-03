import React from 'react';
import routes from '../../routes';
import noPicture from '../../assets/images/default.jpg';
import './style.scss';

const Ingredient = ({ name,image,_id,alto,ancho}) =>(
<       React.Fragment>
                <div className="ingredients__items">
                        <picture className="ingredients-picture">
                                {!(image && image.url) 
                                ? <a href={`${routes.INGREDIENTS}/${_id}`}> <img className="img-ingredients" alt="imagen no encontrada" src={noPicture} height={alto} width={ancho}/></a> 
                                : <a href={`${routes.INGREDIENTS}/${_id}`}> <img className="img-ingredients" alt={name} src={image && image.url} height={alto} width={ancho}/></a>
                                }
                        </picture>
                        {name}  
                </div>

        </React.Fragment>
)    

export default Ingredient;