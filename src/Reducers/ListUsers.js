import { DELETE_USER, LIST_USERS } from "../ActionConst/ActionConst";


export default function ListUsers(state = [], {type,payload}) {
    switch (type) {
        case LIST_USERS:
            const Users=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
          
            return Users;
       case DELETE_USER:
           return;
        default:
            return state;
    }
}