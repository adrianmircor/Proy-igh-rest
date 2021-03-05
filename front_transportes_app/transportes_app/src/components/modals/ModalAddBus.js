import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { crearBus } from "../../redux/actions/busAction.js";

import { Modal, Button } from "react-bootstrap";

const ModalAddBus = (props) => {
  const dispatch = useDispatch();

  const _listafabricantes = useSelector(
    (state) => state.makerReducer.listafabricantes
  );

  const [bus, setBus] = useState({
    placa: "",
    cap_estandar: "",
    cap_premium: "",
    id_fabricante: "1",
  });

  const handleChange = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
    console.log("Modif: ", bus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("El objeto que se enviaria: ", bus);
    dispatch(crearBus(bus));

    setBus({
      placa: "",
      cap_estandar: "",
      cap_premium: "",
      id_fabricante: "1",
    });
  };

  return (
    <Modal
      {...props}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      dialogClassName="mi-modal"
    >
      <Modal.Body>
        <form className="form-modal-crearusuario" onSubmit={handleSubmit}>
          <div className="header-login">
            <h3>Creación</h3>
          </div>

          <div className="body-login">
            <div className="label-input">
              <label htmlFor="">Placa: </label>
              <input type="text" name="placa" onChange={handleChange} />
            </div>
            <div className="label-input">
              <label htmlFor="">Capac. Estándar: </label>
              <input type="text" name="cap_estandar" onChange={handleChange} />
            </div>
            <div className="label-input">
              <label htmlFor="">Capac. Premium: </label>
              <input type="text" name="cap_premium" onChange={handleChange} />
            </div>

            {_listafabricantes == null ? (
              <div></div>
            ) : (
              <div className="label-input">
                <label htmlFor="">Fabricante: </label>
                <select name="id_fabricante" onChange={handleChange}>
                  {_listafabricantes.map((el, key) => (
                    <option key={key} value={el.id_fabricante}>
                      {el.nombre}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="botones">
              <button type="submit" className="btn-login">
                Guardar
              </button>
              <button
                type="button"
                onClick={props.onHide}
                className="btn-login"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddBus;
