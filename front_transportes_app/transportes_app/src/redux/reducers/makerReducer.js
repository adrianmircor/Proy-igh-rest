import { LISTAR_FABRICANTES } from "../types";

const initialState = {
  listafabricantes: null,
};

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
