import { addDoc, collection, doc, setDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { ADD_PRODUCT, UPDATE_PRODUCT } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";




export const AddProducts= (product)=>async (dispatch)=>{
        
            await addDoc(collection(db, "Product"),product )
                dispatch({type:ADD_PRODUCT});
                toast.success('Add succed')
        
}

export const UpdateProduct=(id,product)=>async(dispatch)=>{
    try {
         console.log(id)
    const productRef=doc(db, "Product", id)
    await setDoc(productRef,product);
    console.log("ddj",product)
    dispatch({type:UPDATE_PRODUCT});
    toast.success('Update succed')
    } catch (error) {
        console.log(error)
    }
   
}