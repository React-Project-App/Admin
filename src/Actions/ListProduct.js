import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, LIST_PRODUCT } from "../ActionConst/ActionConst";
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
export const GetProduct= (id)=>async (dispatch)=>{
    
    const  ProdRef=doc(db,"Product",id)
    const ProdSnap=await getDoc(ProdRef)
    
        dispatch({type:GET_PRODUCT,payload:ProdSnap.data()});
}

export const AddProduct= (product)=>async (dispatch)=>{
    try {
        const Product =addDoc(collection(db,"Product"),product)
      
        dispatch({type:ADD_PRODUCT});
        toast.success("Product has been added")

    } catch  {
    }
        
}

