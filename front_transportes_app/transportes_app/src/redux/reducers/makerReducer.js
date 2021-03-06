import { LISTAR_FABRICANTES } from "../types";

const initialState = {
  listafabricantes: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_FABRICANTES:
      return {
        ...state,
        listafabricantes: action.payload,
      };
    default:
      return state;
  }
}
