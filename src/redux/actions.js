import axios from 'axios';
import actionTypes from "./actionTypes";
import { API_ENDPOINT_BASE } from '../constants';

//RECETAS
export const getRecipes = () => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_RECIPES
   });

   return axios.get(`${API_ENDPOINT_BASE}/recipes`)
     .then(response => {
       dispatch({
         type: actionTypes.GET_RECIPES_SUCCESS,
         recipes: response.data
       });
     })
     .catch(error => {
       dispatch({
         type: actionTypes.GET_RECIPES_ERROR,
         error: error.response
       });
     });
  }
};

export const getRecipesById = (id) => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_RECIPES
   });

  return axios.get(`${API_ENDPOINT_BASE}/recipes/${id}`)
    .then(response => {
       dispatch({
         type: actionTypes.GET_RECIPES_SUCCESS,
         recipes: response.data
       });
    })
    .catch(error => {
       dispatch({
         type: actionTypes.GET_RECIPES_ERROR,
         error: error.response
       });
    });
  }
};

//CHEFS
export const getChefs = () => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_CHEFS
   });

  return axios.get(`${API_ENDPOINT_BASE}/chefs`)
     .then(response => {
       dispatch({
         type: actionTypes.GET_CHEFS_SUCCESS,
         chefs: response.data
       });
     })
    .catch(error => {
       dispatch({
         type: actionTypes.GET_CHEFS_ERROR,
         error: error.response
       });
     });
  }
};

export const getChefsById = (id) => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_CHEFS
   });

  return axios.get(`${API_ENDPOINT_BASE}/chefs/${id}`)
    .then(response => {
       dispatch({
         type: actionTypes.GET_CHEFS_SUCCESS,
         chefs: response.data
       });
    })
    .catch(error => {
       dispatch({
         type: actionTypes.GET_CHEFS_ERROR,
         error: error.response
       });
    });
  }
};

//INGREDIENTS
export const getIngredients = () => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_INGREDIENTS
   });

  return axios.get(`${API_ENDPOINT_BASE}/ingredients`)
    .then(response => {
       dispatch({
         type: actionTypes.GET_INGREDIENTS_SUCCESS,
         ingredients: response.data
       });
    })
    .catch(error => {
       dispatch({
         type: actionTypes.GET_INGREDIENTS_ERROR,
         error: error.response
       });
    });
  }
};

export const getIngredientsById = (id) => {
  return dispatch => {
    dispatch({
     type: actionTypes.GET_INGREDIENTS
   });

  return axios.get(`${API_ENDPOINT_BASE}/ingredients/${id}`)
    .then(response => {
       dispatch({
         type: actionTypes.GET_INGREDIENTS_SUCCESS,
         ingredients: response.data
      });
    })
    .catch(error => {
       dispatch({
         type: actionTypes.GET_INGREDIENTS_ERROR,
         error: error.response
       });
    });
  }
};
