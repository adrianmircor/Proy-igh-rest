package com.transportes.dto;

public class ResponseLoginDto {

	private int id_empleado;

	private String apelPaterno;

	private String nombres;

	public ResponseLoginDto(int id_empleado, String apelPaterno, String nombres) {
		super();
		this.id_empleado = id_empleado;
		this.apelPaterno = apelPaterno;
		this.nombres = nombres;
	}

	public int getId_empleado() {
		return id_empleado;
	}

	public void setId_empleado(int id_empleado) {
		this.id_empleado = id_empleado;
	}

	public String getApelPaterno() {
		return apelPaterno;
	}

	public void setApelPaterno(String apelPaterno) {
		this.apelPaterno = apelPaterno;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

}
