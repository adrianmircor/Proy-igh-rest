package com.transportes.service;

import java.util.List;

import com.transportes.model.Bus;

public interface IBusService {
	
	List<Bus> listarBuses();
	void guardar(Bus bus);
	void eliminar(int idBus);
	
	Bus buscarBus(int idBus);

}
