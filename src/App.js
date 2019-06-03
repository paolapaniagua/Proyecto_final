import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './assets/css/style.scss';
import routes from './routes';
import Nav from './components/Nav'
import Home from './components/Home'
import Recipes from './conteiners/Recipes';
import Chefs from './conteiners/Chefs';
import DetalleRec from './conteiners/DetalleRec';
import Ingredients from './conteiners/Ingredients';
import DetalleIng from './conteiners/DetalleIng';
import DetalleChef from './conteiners/DetalleChef';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
          <Nav/>
        <div className="app-container__inner">
          <Switch>
            <Route exact path={`${routes.HOME}`} component={Home} />
            <Route exact path={`${routes.RECIPES}`} component={Recipes} />
            <Route path={`${routes.RECIPES}/:idReceta`} component={DetalleRec} />
            <Route exact path={`${routes.INGREDIENTS}`} component={Ingredients} />
            <Route path={`${routes.INGREDIENTS}/:idIngrediente`} component={DetalleIng} />
            <Route exact path={`${routes.CHEFS}`} component={Chefs} />
            <Route exact path={`${routes.CHEFS}/:idChef`} component={DetalleChef} />
            <Route render={() => <h1>404 - No se encontró</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
