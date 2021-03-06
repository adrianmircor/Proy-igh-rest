import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { actualizarBus } from "../../redux/actions/busAction.js";

import { Modal } from "react-bootstrap";

const ModalEditBus = (props) => {
  const dispatch = useDispatch();

  const _busseleccionado = useSelector(
    (state) => state.busesReducer.busseleccionado
  );

  //const {placa, cap_estandar, cap_premium, id_fabricante} = _busseleccionado

  const _listafabricantes = useSelector(
    (state) => state.makerReducer.listafabricantes
  );

  //console.log("-->", _busseleccionado);

  /* const [bus, setBus] = useState({
    id_bus: _busseleccionado.id_bus,
    cap_estandar: _busseleccionado.cap_estandar,
    cap_premium: _busseleccionado.cap_premium,
    id_fabricante: _busseleccionado.id_fabricante,
  }); */

  const [bus, setBus] = useState({
    id_bus: "",
    placa: "",
    cap_estandar: "",
    cap_premium: "",
    id_fabricante: "",
  });

  useEffect(() => {
    const {
      id_bus,
      placa,
      cap_estandar,
      cap_premium,
      id_fabricante,
    } = _busseleccionado;

    setBus({
      ...bus,
      id_bus,
      placa,
      cap_estandar,
      cap_premium,
      id_fabricante,
    });
    //Ejecutar cada vez que se abra el modal y haya cambio en _busseleccionado
    // eslint-disable-next-line
  }, [props.show === true && _busseleccionado]);

  const handleChange = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
    console.log("Modif: ", bus);
  };

  const { placa, cap_estandar, cap_premium, id_fabricante } = bus;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("El objeto que se enviaria: ", bus);
    dispatch(actualizarBus(bus));
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
            <h3>Edición</h3>
          </div>

          {_busseleccionado == null ? (
            <div></div>
          ) : (
            <div className="body-login">
              <div className="label-input">
                <label htmlFor="">Placa: </label>
                <input
                  type="text"
                  name="placa"
                  value={placa}
                  onChange={handleChange}
                />
              </div>
              <div className="label-input">
                <label htmlFor="">Capac. Estándar: </label>
                <input
                  type="text"
                  name="cap_estandar"
                  value={cap_estandar}
                  onChange={handleChange}
                />
              </div>
              <div className="label-input">
                <label htmlFor="">Capac. Premium: </label>
                <input
                  type="text"
                  name="cap_premium"
                  value={cap_premium}
                  onChange={handleChange}
                />
              </div>

              {_listafabricantes == null ? (
                <div></div>
              ) : (
                <div className="label-input">
                  <label htmlFor="">Fabricante: </label>
                  <select
                    name="id_fabricante"
                    onChange={handleChange}
                    value={id_fabricante}
                  >
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
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditBus;
