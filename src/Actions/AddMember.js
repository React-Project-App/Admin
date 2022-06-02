import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { ADD_MEMBER } from "../ActionConst/ActionConst";
import { db } from "../FirebaseConfig/FirebaseConfig";

export const AddSingleMember = (Member) =>async(dispatch)=> {
    try{
        await addDoc(collection(db,"Team"),Member)
    
    
        
    
    
        dispatch({type:ADD_MEMBER})
        toast.success("Member has been added")
        
    }
    catch(e) {
        toast.success("Member has been added")

    }



}
