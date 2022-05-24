import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { ADD_POST } from "../ActionConst/ActionConst"
import { db } from "../FirebaseConfig/FirebaseConfig"

export const AddSinglePost =(post)=> async (dispatch)=>{
try{
	console.log(post)
    await addDoc(collection(db,"Post"),post)


    


    dispatch({type:ADD_POST})
	toast.success("Post has been added")

	
}
catch(e) {
	console.log(e)
}

}