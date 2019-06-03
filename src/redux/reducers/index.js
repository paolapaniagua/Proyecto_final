import { combineReducers } from "redux";
import recipes from "./recipes";
import chefs from "./chefs";
import ingredients from "./ingredients";

export default combineReducers({ recipes, chefs,ingredients});
