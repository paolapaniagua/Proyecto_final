import actionTypes from "../actionTypes";

const initialState = {
  isRecipesLoading: true,
  recipes: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_RECIPES: {
      return {
        ...state,
        isRecipesLoading: true,
        recipes: []
      };
    }
    case actionTypes.GET_RECIPES_SUCCESS: {
      return {
        ...state,
        isRecipesLoading: false,
        recipes: action.recipes
      };
    }
    default:
      return state;
  }
}
