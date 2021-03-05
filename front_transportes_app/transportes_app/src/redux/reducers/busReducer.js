import { LISTAR_BUSES, BANDERA_LISTAR_BUSES, SELECCION_BUS } from "../types";

const initialState = {
  listabuses: null,
  banderalistabuses: false,
  busseleccionado: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_BUSES:
      return {
        ...state,
        listabuses: action.payload,
      };
    case BANDERA_LISTAR_BUSES:
      return {
        ...state,
        banderalistabuses: action.payload,
      };
    case SELECCION_BUS:
      return {
        ...state,
        busseleccionado: action.payload,
      };
    default:
      return state;
  }
}
