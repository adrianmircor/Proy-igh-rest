import { ASIGNAR_USUARIO } from "../types";

const initialState = {
  employee: null,
};

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
