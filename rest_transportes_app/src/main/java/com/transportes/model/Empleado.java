package com.transportes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EMPLEADO")
public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="IDEMPLEADO")
	private Integer id_empleado;
	
	@Column(name="APELLIDOPATERNO")
	private String apelPaterno;
	
	@Column(name="APELLIDOMATERNO")
	private String apelMaterno;

	@Column(name="NOMBRES")
	private String nombres;
	
	@Column(name="USUARIO")
	private String correo;
	
	@Column(name="CONTRASENA")
	private String password;

	public Integer getId_empleado() {
		return id_empleado;
	}

	public void setId_empleado(Integer id_empleado) {
		this.id_empleado = id_empleado;
	}

	public String getApelPaterno() {
		return apelPaterno;
	}

	public void setApelPaterno(String apelPaterno) {
		this.apelPaterno = apelPaterno;
	}

	public String getApelMaterno() {
		return apelMaterno;
	}

	public void setApelMaterno(String apelMaterno) {
		this.apelMaterno = apelMaterno;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Empleado [id_empleado=" + id_empleado + ", apelPaterno=" + apelPaterno + ", apelMaterno=" + apelMaterno
				+ ", nombres=" + nombres + ", correo=" + correo + ", password=" + password + "]";
	}

	
	

}