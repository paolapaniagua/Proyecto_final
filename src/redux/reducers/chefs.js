import actionTypes from "../actionTypes";

const initialState = {
  isChefsLoading: true,
  chefs: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CHEFS: {
      return {
        ...state,
        isChefsLoading: true,
        chefs: []
      };
    }
    case actionTypes.GET_CHEFS_SUCCESS: {
      return {
        ...state,
        isChefsLoading: false,
        chefs: action.chefs
      };
    }
    default:
      return state;
  }
}
