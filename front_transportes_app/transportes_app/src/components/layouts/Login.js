import React, { useState } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { verificarEmpleado } from "../../redux/actions/employeeAction";

import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const _employee = useSelector((state) => state.employeeReducer.employee);

  const [credential, setCredential] = useState({
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verificarEmpleado(credential));
  };

  if (_employee !== null) {
    return <Redirect to="/buses" />;
  }

  return (
    <div>
      <section>
        <div className="contenedor">
          <div className="bienvenido">
            <h2>¡Bienvenido!</h2>
          </div>

          <form className="login" onSubmit={handleSubmit}>
            <div className="header-login">
              <h3>Iniciar Sesión</h3>
            </div>

            <div className="body-login">
              <div className="label-input">
                <label htmlFor="">Usuario: </label>
                <input type="text" name="correo" onChange={handleChange} />
              </div>

              <div className="label-input">
                <label htmlFor="">Contraseña: </label>
                <input type="password" name="password" onChange={handleChange} />
              </div>

              <div className="botones">
                <button type="submit" className="btn-login">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
