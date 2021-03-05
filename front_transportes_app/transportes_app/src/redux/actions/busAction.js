import { LISTAR_BUSES, BANDERA_LISTAR_BUSES, SELECCION_BUS } from "../types";
import axios from "axios";

export function retornarBuses() {
  return async (dispatch) => {
    axios
      .get("http://localhost:8080/api/v1/buses")
      .then((res) => {
        console.log("El servidor responde con: ", res.data);

        dispatch({
          type: LISTAR_BUSES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function modifBanderaListaBuses(bandera) {
  return (dispatch) => {
    console.log("modifBanderaListaVehiculos");
    dispatch({
      type: BANDERA_LISTAR_BUSES,
      payload: bandera,
    });
  };
}

export function crearBus(bus) {
  return async (dispatch) => {
    axios
      .post("http://localhost:8080/api/v1/buses/add", bus)
      .then((res) => {
        console.log("Post: ", res);
        dispatch({
          type: BANDERA_LISTAR_BUSES,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function eliminarBus(id_bus) {
  return async (dispatch) => {
    axios
      .delete("http://localhost:8080/api/v1/buses/delete/" + id_bus)
      .then((res) => {
        console.log("DELETE: ", res);
        dispatch({
          type: BANDERA_LISTAR_BUSES,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function buscarBus(id_bus) {
  return async (dispatch) => {
    axios
      .get("http://localhost:8080/api/v1/buses/search/" + id_bus)
      .then((res) => {
        console.log("Busca el bus: ", res);
        dispatch({
          type: SELECCION_BUS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function actualizarBus(bus) {
    return async (dispatch) => {
      axios
        .put("http://localhost:8080/api/v1/buses/edit", bus)
        .then((res) => {
          console.log("Edita el bus: ", res.data);
          dispatch({
            type: BANDERA_LISTAR_BUSES,
            payload: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
