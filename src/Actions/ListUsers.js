import { deleteUser } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
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
        const user1=await getDoc(userDoc)
        const user=JSON.parse(user1.data().user)
        console.log(user);
            await deleteDoc(userDoc)
            deleteUser(user).then(() => {
                toast.success("delete success")
              }).catch((error) => {
                console.log(error)
              });
            

            dispatch({type:DELETE_USER});
    } catch (error) {
        console.log(error.message)
    }
            
    }
    