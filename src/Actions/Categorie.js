import { collection, onSnapshot, } from "firebase/firestore";
import { CATEGORIE } from "../ActionConst/ActionConst";

import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetCategories=()=>async (dispatch)=>{
    onSnapshot(collection(db,"Categories"),(cat)=>{
        dispatch({type:CATEGORIE,payload:cat});
    })
}

