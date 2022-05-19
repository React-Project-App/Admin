import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { DELETE_USER, LIST_USERS } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetAllUsers= ()=>async (dispatch)=>{

    onSnapshot(collection(db,"User"),(snapshot)=>{
    
        dispatch({type:LIST_USERS,payload:snapshot});
    })
}
export const DeleteProduct= (id)=>async (dispatch)=>{
    try {
        const  userDoc=doc(db,"User",id)
            await deleteDoc(userDoc)
            toast.success("delete success")
    
            dispatch({type:DELETE_USER});
    } catch (error) {
        console.log(error.message)
    }
            
    }
    