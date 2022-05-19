import { ADD_PRODUCT, DELETE_PRODUCT, LIST_PRODUCT } from "../ActionConst/ActionConst";


export default function ListProduct(state = [], {type,payload}) {
    switch (type) {
        case LIST_PRODUCT:
            const Products=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return Products;
        case DELETE_PRODUCT:
            return ;
            case ADD_PRODUCT:
            return ;
            

        default:
            return state;
    }
}