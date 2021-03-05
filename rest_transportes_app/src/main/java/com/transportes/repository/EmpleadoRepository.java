package com.transportes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.transportes.model.Empleado;


public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {
	
	Empleado findByCorreoAndPassword(String correo, String password);

}