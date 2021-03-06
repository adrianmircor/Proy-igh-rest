import { LISTAR_BUSES, BANDERA_LISTAR_BUSES, SELECCION_BUS } from "../types";

const initialState = {
  listabuses: null,
  banderalistabuses: false,
  busseleccionado: {
    id_bus:"",
    placa:"",
    cap_estandar:"",
    cap_premium:"",
    id_fabricante:""
  },
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
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
