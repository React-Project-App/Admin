import { combineReducers } from "redux";

import ListProduct from "./ListProduct";
import ListUsers from "./ListUsers";
import Categories from './Categories'
export const   Red = combineReducers({ListProduct,ListUsers ,Categories});