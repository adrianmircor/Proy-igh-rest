package com.transportes.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transportes.model.Bus;
import com.transportes.repository.BusRepository;
import com.transportes.service.IBusService;

@Service
public class BusService implements IBusService {

	@Autowired
	BusRepository busRepository;

	@Override
	public List<Bus> listarBuses() {

		return busRepository.findAll();
	}

	@Override
	public void guardar(Bus bus) {
		busRepository.save(bus);

	}

	@Override
	public void eliminar(int idBus) {
		busRepository.deleteById(idBus);

	}

	@Override
	public Bus buscarBus(int idBus) {

		Optional<Bus> optionalProgram = busRepository.findById(idBus);

		if (optionalProgram.isPresent()) {
			return optionalProgram.get();
		}

		return null;
	}

}
