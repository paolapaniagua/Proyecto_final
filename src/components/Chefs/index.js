import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';

const Chef = ({_id,full_name,bio,image}) =>(
        <React.Fragment>
                <article className="chef__info">
                        <h1 className="section__titulo">{full_name}</h1>
                        <picture className="picture-chefs">
                                <img className="imagen-chefs" alt={full_name} src={image && image.url}/>
                        </picture>
                        
                        <ReactMarkdown key={_id} source={bio} />    
                </article>
        </React.Fragment>
)    

export default Chef;