package com.transportes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transportes.model.Empleado;
import com.transportes.repository.EmpleadoRepository;
import com.transportes.service.IEmpleadoService;

@Service
public class EmpleadoService implements IEmpleadoService {

	@Autowired
	private EmpleadoRepository empleadoRepository;

	@Override
	public Empleado verificar(String correo, String password) {

		Empleado empleado = empleadoRepository.findByCorreoAndPassword(correo, password);
		if (empleado != null) {
			return empleado;
		}
		return null;

	}

	@Override
	public void agregar(Empleado empleado) {
		empleadoRepository.save(empleado);

	}

	@Override
	public void actualizar(Empleado empleado) {
		empleadoRepository.save(empleado);

	}

	@Override
	public void eliminar(int idEmpleado) {
		empleadoRepository.deleteById(idEmpleado);
		
	}

	@Override
	public List<Empleado> listarEmpleados() {
		return empleadoRepository.findAll();
	}

}