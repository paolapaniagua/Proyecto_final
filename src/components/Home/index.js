import React from 'react';
import Recipes from '../../conteiners/Recipes';
import Ingredients from '../../conteiners/Ingredients';
import './style.scss';

const Home = () => {
    return(
        <React.Fragment>
                <section className="section__recipes">
                    <h1 className="section__titulo">Our recipes:</h1>
                    <div className="section__recipes-conteiner">
                        <Recipes/>
                    </div>
                </section>

                <hr/> 
                
                <section className="section__ingredients">
                    <h1 className="section__titulo">Our favourite ingredients:</h1>    
                    <div className="section__ingredients-conteiner">
                        <Ingredients/>
                    </div>
            </section>
        </React.Fragment>
    ) 
}

export default Home;