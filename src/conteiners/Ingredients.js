import React from 'react';
import { connect } from 'react-redux';
import { getIngredients } from '../redux/actions'
import Ingredient from '../components/Ingredients';

const mapStateToProps = (state) => ({   
    loading: state.ingredients.isIngredientsLoading === true,
    ingredients: state.ingredients.ingredients
});

class Ingredients extends React.Component {
  componentWillMount(){
    this.props.dispatch(getIngredients());
  }

  render() {
     return (
         <React.Fragment>
            {this.props.loading ? <div className="loader">Loading...</div>:
                <React.Fragment>
                    {this.props.ingredients.map(ingredient => {
                        return(
                            <Ingredient key={ingredient._id} name={ingredient.name} image={ingredient.image} _id={ingredient._id} alto="100" ancho="100"/>
                        )
                    })}
                </React.Fragment>
            }
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(Ingredients);