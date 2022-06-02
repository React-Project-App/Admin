import { collection, onSnapshot } from "firebase/firestore";
import { GET_MESSAGES } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetMessages =()=> async(dispatch)=>{


    onSnapshot(collection(db,"Contact"),(snapshot)=>{
    
        dispatch({type:GET_MESSAGES,payload:snapshot});
    })
}