package com.transportes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transportes.dto.ResponseDto;
import com.transportes.dto.ResponseLoginDto;
import com.transportes.model.Empleado;
import com.transportes.service.IEmpleadoService;

@RestController
@RequestMapping("/api/v1/empleados")
@CrossOrigin("*")
public class EmpleadoController {

	@Autowired
	private IEmpleadoService iEmpleadoService;

	@GetMapping("")
	public List<Empleado> listarEmpleados() {

		return iEmpleadoService.listarEmpleados();
	}

	@GetMapping("/validate/{correo}/{password}")
	public Empleado verificarEmpleadoGET(@PathVariable String correo, @PathVariable String password) {

		Empleado empl;

		empl = iEmpleadoService.verificar(correo, password);

		if (empl == null) {
			return null;
		}
		return empl;
	}

	@PostMapping("/validate")
	public ResponseEntity<?> verificarEmpleadoPOST(@RequestBody Empleado empleado) {

		ResponseDto<?> responseDto;
		ResponseLoginDto responseLoginDto;
		Empleado empl;

		empl = iEmpleadoService.verificar(empleado.getCorreo(), empleado.getPassword());

		if (empl == null) {
			
			responseDto = new ResponseDto<>(-1, "No coinciden el correo y el password", null);
		}else {
			responseLoginDto = new ResponseLoginDto(empl.getId_empleado(), empl.getApelPaterno(), empl.getNombres());
			
			responseDto = new ResponseDto<>(1, "Ingreso aceptado", responseLoginDto);
		}

		return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseDto);
	}

	@PostMapping("/add")
	public String agregarEmpleado(@RequestBody Empleado empleado) {

		iEmpleadoService.agregar(empleado);
		return "Empleado registrado";
	}

	@PutMapping("/edit")
	public String editarEmpleado(@RequestBody Empleado empleado) {

		iEmpleadoService.agregar(empleado);
		return "Empleado actualizado";
	}

	@DeleteMapping("/delete/{id}")
	public String eliminarEmpleado(@PathVariable int id) {

		iEmpleadoService.eliminar(id);
		return "Empleado eliminado";
	}

}
