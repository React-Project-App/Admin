import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfigg = {
  apiKey: "AIzaSyDbAB2ZqGgW_irzF1zLYrAGpXPDaIbLo4E",
  authDomain: "blocproject-a8e69.firebaseapp.com",
  projectId: "blocproject-a8e69",
  storageBucket: "blocproject-a8e69.appspot.com",
  messagingSenderId: "68252610202",
  appId: "1:68252610202:web:c2fcd08146777c020ab923"
};

export const AppLogin = initializeApp(firebaseConfigg, "secondry");
export const authAdmin = getAuth(AppLogin);
