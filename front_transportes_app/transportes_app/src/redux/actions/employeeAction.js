import { ASIGNAR_USUARIO } from "../types";
import axios from "axios";

export function verificarEmpleado(credential) {
  return async (dispatch) => {
    axios
      .post("http://localhost:8080/api/v1/empleados/validate", credential)
      .then((res) => {
        console.log("El servidor responde con: ", res.data);

        dispatch({
          type: ASIGNAR_USUARIO,
          payload: res.data.bag,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function cerrarSesionEmpleado() {
  return (dispatch) => {
    dispatch({
      type: ASIGNAR_USUARIO,
      payload: null,
    });
  };
}
