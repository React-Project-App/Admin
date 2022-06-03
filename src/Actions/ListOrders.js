import { collection, onSnapshot } from "firebase/firestore";
import { ListOrders } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";





export const GetAllOrders= ()=>async (dispatch)=>{

    onSnapshotot(collectionction(db,"Orders"),(snapshot)=>{
    
        dispatch({type:ListOrders,payload:snapshot});
    })
}