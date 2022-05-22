import { combineReducers } from "redux";

import ListProduct from "./ListProduct";
import ListUsers from "./ListUsers";
import Categories from './Categories'
import Orders from './Orders'
export const   Red = combineReducers({ListProduct,ListUsers ,Categories,Orders});