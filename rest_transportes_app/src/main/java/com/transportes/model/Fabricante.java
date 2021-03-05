package com.transportes.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FABRICANTE")
public class Fabricante implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="IDFABRICANTE")
	private Integer id_fabricante;
	
	@Column(name="NOMBRE")
	private String nombre;
	
	@Column(name="PAIS")
	private String pais;
	
	@Column(name="DIRECCION")
	private String direccion;
	
	public Integer getId_fabricante() {
		return id_fabricante;
	}
	public void setId_fabricante(Integer id_fabricante) {
		this.id_fabricante = id_fabricante;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
}