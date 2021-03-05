import React from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { cerrarSesionEmpleado } from "../../redux/actions/employeeAction";

import { Link, Redirect } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();

  const _employee = useSelector((state) => state.employeeReducer.employee);

  const btnCerrarSesion = () => {
    console.log("Cerrar sesion");
    dispatch(cerrarSesionEmpleado());
    return <Redirect to="/" />;
  };

  if (_employee === null) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <nav>
        <div className="pag-principal contenedor-opcion">
          <Link to="/main">
            <h5>TransportesApp</h5>
          </Link>
        </div>
        <div className="opciones">
          <div className="contenedor-opcion">
            <Link to="/main/users">
              <h5>Buses</h5>
            </Link>
          </div>
          <div className="contenedor-opcion">
            <Link to="/main/vehicles">
              <h5>Rutas</h5>
            </Link>
          </div>
        </div>
        <div className="div-btn-cerrarsesion ">
          <div className="saludo">
            <p>Hola {_employee.nombres}</p>
          </div>

          <button
            className="btn-cerrarsesion"
            onClick={() => btnCerrarSesion()}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
