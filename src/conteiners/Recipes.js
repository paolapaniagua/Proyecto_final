import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../redux/actions'
import Card from '../components/Recipes';

const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class Recipes extends React.Component {
  componentWillMount(){
    this.props.dispatch(getRecipes());
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loading ?<div className="loader">Loading...</div>:
          <React.Fragment>
            {this.props.recipes.map((recipe) => {
              return(<Card key={recipe._id} title={recipe.title} chef={recipe.chef} _id={recipe._id}  main_image={recipe.main_image}
                    prep_time={recipe.prep_time} rating={recipe.rating}
                    desc="This is a preview Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit..." textoBy="By"/>
                )
            })}
          </React.Fragment>
        }
        </React.Fragment>
      )
    }
}

export default connect(mapStateToProps, null)(Recipes);