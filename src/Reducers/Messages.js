import { ANSWER, GET_MESSAGES, GET_SINGLE_MESSAGE } from "../ActionConst/ActionConst";



const  Messages = (state = [], {type,payload}) => {
    switch (type) {
        case GET_MESSAGES:
            const Contacts=payload.docs.map(doc=>({...doc.data(),id:doc.id}));
            return Contacts;
        // case GET_SINGLE_MESSAGE:
        //     console.log(state)
        //    const Messages =state.filter(contact=>contact.Email===payload)
                   
            
        //     console.log(Messages)
        //     return Messages;

        default:
            return state;
    }


}
export default Messages;