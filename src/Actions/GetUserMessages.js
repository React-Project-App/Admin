import { GET_SINGLE_MESSAGE } from "../ActionConst/ActionConst"


export const GetSingleMessage = (Id) => async (dispatch) => {

    dispatch({ type: GET_SINGLE_MESSAGE, payload: Id })

}