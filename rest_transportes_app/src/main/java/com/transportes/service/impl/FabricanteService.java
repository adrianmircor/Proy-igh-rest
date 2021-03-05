package com.transportes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transportes.model.Fabricante;
import com.transportes.repository.FabricanteRepository;
import com.transportes.service.IFabricanteService;

@Service
public class FabricanteService implements IFabricanteService {
	
	@Autowired
	private FabricanteRepository fabricanteRepository;
	
	@Override
	public List<Fabricante> listaFabricantes() {
		return fabricanteRepository.findAll();
	}

}
