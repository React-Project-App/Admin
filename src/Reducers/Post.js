import { ADD_POST } from "../ActionConst/ActionConst";

export default function addpost(state = [], { type, payload }) {
  switch (type) {
    case ADD_POST:
      return state;

    default:
      return state;
  }
}
