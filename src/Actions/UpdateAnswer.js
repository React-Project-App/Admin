import { doc, updateDoc } from "firebase/firestore"
import { UPDATE_ANSWER } from "../ActionConst/ActionConst"
import { db } from "../FirebaseConfig/FirebaseConfig"

export const UpdateAnswer = (Id) => async (dispatch) => {



    updateDoc(doc(db, "Contact", Id), { Answer: "Viewed" })
    dispatch({ type:UPDATE_ANSWER})



}