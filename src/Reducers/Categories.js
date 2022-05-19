import { CATEGORIE } from "../ActionConst/ActionConst";

export default function Categories(state = [], {type,payload}) {
    switch (type) {
        case CATEGORIE:
            const Categoriess=payload.docs.map(doc=>({...doc.data()}))
            return Categoriess;

        
        
        default:
            return state;
    }
}