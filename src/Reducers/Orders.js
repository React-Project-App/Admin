import { TOTAL_ORDER } from "../ActionConst/ActionConst";





export default function Orders(state = [], {type,payload}) {
    switch (type) {
        case TOTAL_ORDER:
            const Orders=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            // console.log(Orders.length)
            return Orders;
         default:
            return state;   
        
}} 