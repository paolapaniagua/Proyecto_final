import React from 'react';
import { connect } from 'react-redux';
import {getIngredientsById } from '../redux/actions'
import IngredientDetails from '../components/IngredientDetails';

const mapStateToProps = (state) => ({
    loading: state.ingredients.isIngredientsLoading === true,
    ingredients: state.ingredients.ingredients
});

class DetalleIng extends React.Component {
  componentWillMount(){   
    const { match } = this.props; 
    const { params } = match;
    const { idIngrediente } = params;

    this.props.dispatch(getIngredientsById(idIngrediente));
  }

  render() {
    return (
      <React.Fragment>
         { this.props.loading 
          ? <div className="loader">Loading...</div>
          : <IngredientDetails {...this.props.ingredients} />
        }  
      </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(DetalleIng);