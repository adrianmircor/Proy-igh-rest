import { ASIGNAR_USUARIO } from "../types";

const initialState = {
  employee: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case ASIGNAR_USUARIO:
      return {
        ...state,
        employee: action.payload,
      };
    default:
      return state;
  }
}
