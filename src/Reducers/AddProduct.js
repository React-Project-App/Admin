import { ADD_PRODUCT, UPDATE_PRODUCT } from "../ActionConst/ActionConst";




export default function AddProduct(state = [], {type,payload}) {
    switch (type) {
        case ADD_PRODUCT:
            return ;
        case UPDATE_PRODUCT:
            return ;
        default:
            return state;
    }
}