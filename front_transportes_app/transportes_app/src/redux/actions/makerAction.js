import { LISTAR_FABRICANTES } from "../types";
import axios from "axios";

export function retornarFabricantes() {
  return async (dispatch) => {
    axios
      .get("http://localhost:8080/api/v1/fabricantes")
      .then((res) => {
        console.log("Fabricantes: ", res.data);

        dispatch({
          type: LISTAR_FABRICANTES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
