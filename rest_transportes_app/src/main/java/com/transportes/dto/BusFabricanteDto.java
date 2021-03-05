package com.transportes.dto;

public class BusFabricanteDto {
	
	private int id_bus;
	private String placa;
	private int cap_estandar;
	private String cap_premium;
	private int id_fabricante;
	
	
	public BusFabricanteDto(int id_bus, String placa, int cap_estandar, String cap_premium, int id_fabricante) {
		super();
		this.id_bus = id_bus;
		this.placa = placa;
		this.cap_estandar = cap_estandar;
		this.cap_premium = cap_premium;
		this.id_fabricante = id_fabricante;
	}
	public int getId_bus() {
		return id_bus;
	}
	public void setId_bus(int id_bus) {
		this.id_bus = id_bus;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public int getCap_estandar() {
		return cap_estandar;
	}
	public void setCap_estandar(int cap_estandar) {
		this.cap_estandar = cap_estandar;
	}
	public String getCap_premium() {
		return cap_premium;
	}
	public void setCap_premium(String cap_premium) {
		this.cap_premium = cap_premium;
	}
	public int getId_fabricante() {
		return id_fabricante;
	}
	public void setId_fabricante(int id_fabricante) {
		this.id_fabricante = id_fabricante;
	}
	@Override
	public String toString() {
		return "BusFabricanteDto [id_bus=" + id_bus + ", placa=" + placa + ", cap_estandar=" + cap_estandar
				+ ", cap_premium=" + cap_premium + ", int_fabricante=" + id_fabricante + "]";
	}
	
	
	
	
}
