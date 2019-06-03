import React from 'react';
import { connect } from 'react-redux';
import { getRecipesById } from '../redux/actions'
import RecipeDetails from '../components/RecipeDetails';

const mapStateToProps = (state) => ({
    
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class DetalleRec extends React.Component {
  componentWillMount(){
    
    const { match } = this.props; 
    const { params } = match;
    const { idReceta } = params;

    this.props.dispatch(getRecipesById(idReceta));
  }

  render() {
     return (
         <React.Fragment>
           
         {
         this.props.loading 
          ?<div className="loader">Loading...</div>
          : <RecipeDetails {...this.props.recipes} />
        }  
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(DetalleRec);