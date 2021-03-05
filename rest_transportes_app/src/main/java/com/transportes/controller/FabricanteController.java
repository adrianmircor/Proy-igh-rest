package com.transportes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transportes.model.Fabricante;
import com.transportes.service.IFabricanteService;

@RestController
@RequestMapping("/api/v1/fabricantes")
@CrossOrigin("*")
public class FabricanteController {
	
	@Autowired
	private IFabricanteService fabricanteService;
	
	@GetMapping("")
	public List<Fabricante> listaFabricantes() {

		return fabricanteService.listaFabricantes();
	}
	

}
