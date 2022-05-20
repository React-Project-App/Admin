import { collection, onSnapshot } from "firebase/firestore";
import { TOTAL_ORDER } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";




export const GetOrders= ()=>async (dispatch)=>{

    onSnapshot(collection(db,"Orders"),(snapshot)=>{
    
        dispatch({type:TOTAL_ORDER,payload:snapshot});
    })
}