import React from "react";
import { LOGEDINADMIN, LOGIN_ADMIN, SIGNOUTADMIN } from "../ActionConst/ActionConst";

export default function LoginAdmin(state = null, { type, payload }) {
  switch (type) {
    case LOGIN_ADMIN:
      return state;
    case LOGEDINADMIN:
      return payload;
    case SIGNOUTADMIN:
      return state;
    default:
      return state;
  }
}
