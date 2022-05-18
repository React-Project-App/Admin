import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { DELETE_PRODUCT, LIST_PRODUCT } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetAllProduct= ()=>async (dispatch)=>{

    onSnapshot(collection(db,"Product"),(snapshot)=>{
    
        dispatch({type:LIST_PRODUCT,payload:snapshot});
    })
}

export const DeleteProduct= (id)=>async (dispatch)=>{
try {
    const  userDoc=doc(db,"Product",id)
        await deleteDoc(userDoc)
        toast.success("delete success")

        dispatch({type:DELETE_PRODUCT});
} catch (error) {
    console.log(error.message)
}
        
}
