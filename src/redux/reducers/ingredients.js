import actionTypes from "../actionTypes";

const initialState = {
  isIngredientsLoading: true,
  ingredients: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTS: {
      return {
        ...state,
        isIngredientsLoading: true,
        ingredients: []
      };
    }
    case actionTypes.GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isIngredientsLoading: false,
        ingredients: action.ingredients
      };
    }
    default:
      return state;
  }
}
