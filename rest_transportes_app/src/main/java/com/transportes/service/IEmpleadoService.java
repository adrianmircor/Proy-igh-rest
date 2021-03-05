package com.transportes.service;

import java.util.List;

import com.transportes.model.Empleado;

public interface IEmpleadoService {

	Empleado verificar(String correo, String password);
	void agregar(Empleado empleado);
	void actualizar(Empleado empleado);
	void eliminar(int idEmpleado);
	List<Empleado> listarEmpleados();
}