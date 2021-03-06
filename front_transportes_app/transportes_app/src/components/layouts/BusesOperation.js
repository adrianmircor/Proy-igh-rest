import React, { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

import {
  retornarBuses,
  modifBanderaListaBuses,
  eliminarBus,
  buscarBus,
} from "../../redux/actions/busAction";

import { retornarFabricantes } from "../../redux/actions/makerAction";

import Table from "react-bootstrap/Table";

import Navigation from "./Navigation";
import ModalAddBus from "../modals/ModalAddBus";
import ModalEditBus from "../modals/ModalEditBus";
//import ModalAddObservation from '../modals/ModalAddObservation';

const BusesOperation = () => {
  const dispatch = useDispatch();

  const _listabuses = useSelector((state) => state.busesReducer.listabuses);
  const _banderalistabuses = useSelector(
    (state) => state.busesReducer.banderalistabuses
  );

  useEffect(() => {
    dispatch(retornarBuses());

    if (_banderalistabuses) {
      dispatch(modifBanderaListaBuses(false));
    }
    // eslint-disable-next-line
  }, [_banderalistabuses === true]);

  useEffect(() => {
    dispatch(retornarFabricantes());
    // eslint-disable-next-line
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);

  const addBus = () => {
    setModalShow(true);
  };

  const editarBus = (id) => {
    dispatch(buscarBus(id));
    setModalShowEdit(true);
  };

  const borrarBus = (e, id_bus) => {
    e.preventDefault();
    dispatch(eliminarBus(id_bus));
  };

  //console.log("LISTA DE USUARIOS(scope general): ", _listaUsuarios);

  return (
    <div>
      <Navigation></Navigation>
      <main className="main-user-vehicle">
        <div className="contenedor-add">
          <div className="header-contenedor-add">
            <div>
              <h4>Buses registrados</h4>
            </div>
            <div className="div-btn-agregar">
              <button onClick={() => addBus()} className="btn-agregar">
                + Nuevo
              </button>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Capac. Estándar</th>
                <th>Capac. Premium</th>
                <th>Fabricante</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {_listabuses == null ? (
                <tr>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                  <td>cargando...</td>
                </tr>
              ) : (
                _listabuses.map((el, key) => (
                  <tr key={key}>
                    <td>{el.placa}</td>
                    <td>{el.cap_estandar}</td>
                    <td>{el.cap_premiun}</td>
                    <td>{el.fabricante.nombre}</td>
                    <td>
                      <button onClick={() => editarBus(el.id_bus)}>
                        Editar
                      </button>

                      <button onClick={(e) => borrarBus(e, el.id_bus)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </main>

      <ModalEditBus
        show={modalShowEdit}
        onHide={() => setModalShowEdit(false)}
      />

      <ModalAddBus show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default BusesOperation;
