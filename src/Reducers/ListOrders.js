import { ListOrders } from "../ActionConst/ActionConst";



export default function ListProduct(state = [], {type,payload}) {
    switch (type) {
        case ListOrders:
            const Orders=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return Orders;
        default:
            return state;
    }
}