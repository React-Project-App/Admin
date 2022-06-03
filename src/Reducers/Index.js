import { combineReducers } from "redux";

import ListProduct from "./ListProduct";
import ListUsers from "./ListUsers";
import Categories from './Categories'
import Orders from './Orders'
import Post from "./Post"
import LoginAdmin from "./LoginAdmin";
import Messages from "./Messages";
import ListOrders from "./ListOrders";

export const   Red = combineReducers({ListProduct,ListUsers,Categories,Orders,Post,LoginAdmin,Messages,ListOrders});