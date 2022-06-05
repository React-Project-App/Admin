
import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import {LOGIN_ADMIN,LOGEDINADMIN, SIGNOUTADMIN} from '../ActionConst/ActionConst'
import { auth } from "../FirebaseConfig/FirebaseConfig";
import { authAdmin } from "../FireBaseLoginConfig/FirebaseLoginConfig";


export const LoginAdmin=( email, password)=>async (dispatch)=>{
    signInWithEmailAndPassword(authAdmin, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    dispatch({type:LOGIN_ADMIN})
    // updateProfile(user,{displayName:"Walid Drif"})
    toast.success("Welcome "+user.displayName)
    localStorage.setItem("user",user.displayName)
    setTimeout(()=>{
    window.location.pathname="/Dashboard"
    },3000)
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    toast.error("Invalid informations")
  });
}

export const LogedInAdmin=()=>async (dispatch)=>{
    onAuthStateChanged(authAdmin, (user) => {
        dispatch({type:LOGEDINADMIN,payload:user})
      });
}
export const SignOutAdmin=()=>async (dispatch)=>{
    signOut(authAdmin).then(() => {
            dispatch({type:SIGNOUTADMIN})
            toast.success("Goodby")
            localStorage.clear()
            setTimeout(()=>{
              window.location.pathname="/"
              },3000)
            


    }).catch((error) => {
    });
}
