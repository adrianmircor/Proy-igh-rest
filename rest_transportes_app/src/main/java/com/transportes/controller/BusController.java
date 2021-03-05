package com.transportes.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transportes.dto.BusFabricanteDto;
import com.transportes.model.Bus;
import com.transportes.model.Fabricante;
import com.transportes.service.IBusService;

@RestController
@RequestMapping("/api/v1/buses")
@CrossOrigin("*")
public class BusController {

	@Autowired
	private IBusService iBusService;


	/*@GetMapping()
	public List<BusFabricanteDto> listarBuses() {
		
		List<Bus> listaBuses = iBusService.listarBuses();
		List<BusFabricanteDto> listaBusFabricante = new ArrayList<>();
		
		for (Bus bus : listaBuses) {
			BusFabricanteDto busFabricante = new BusFabricanteDto(
					bus.getId_bus(),
					bus.getPlaca(),
					bus.getCap_estandar(),
					bus.getCap_premiun(),
					bus.getFabricante().getId_fabricante()
					);
			
			listaBusFabricante.add(busFabricante);
		}

		return listaBusFabricante;
	}*/
	
	@GetMapping()
	public List<Bus> listarBuses() {
		
		return iBusService.listarBuses();
	}

	@PostMapping("/add")
	public String agregarBus(@RequestBody BusFabricanteDto busFabricanteDto) {
		
		System.out.println("llega: "+busFabricanteDto);
		Bus bus = new Bus();
		Fabricante fabricante = new Fabricante();
		
		bus.setId_bus(busFabricanteDto.getId_bus());
		bus.setPlaca(busFabricanteDto.getPlaca());
		bus.setCap_estandar(busFabricanteDto.getCap_estandar());
		bus.setCap_premiun(busFabricanteDto.getCap_premium());
		
		fabricante.setId_fabricante(busFabricanteDto.getId_fabricante());
		bus.setFabricante(fabricante);
		
		iBusService.guardar(bus);

		return "Se agregó el bus";
	}

	@PutMapping("/edit")
	public String editarBus(@RequestBody BusFabricanteDto busFabricanteDto) {
		
		System.out.println("llega editar: "+busFabricanteDto);
		Bus bus = new Bus();
		Fabricante fabricante = new Fabricante();
		
		bus.setId_bus(busFabricanteDto.getId_bus());
		bus.setPlaca(busFabricanteDto.getPlaca());
		bus.setCap_estandar(busFabricanteDto.getCap_estandar());
		bus.setCap_premiun(busFabricanteDto.getCap_premium());
		
		fabricante.setId_fabricante(busFabricanteDto.getId_fabricante());
		bus.setFabricante(fabricante);
		
		iBusService.guardar(bus);
		return "Se actualizó el bus";
	}

	@DeleteMapping("/delete/{id_bus}")
	public String eliminarBus(@PathVariable("id_bus") int idBus) {

		iBusService.eliminar(idBus);

		return "Bus eliminado";
	}
	
	@GetMapping("/search/{id_bus}")
	public BusFabricanteDto buscarBus(@PathVariable("id_bus") int idBus) {

		Bus bus = new Bus();
		bus = iBusService.buscarBus(idBus);
		
		BusFabricanteDto busFabricanteDto = new BusFabricanteDto(
				bus.getId_bus(),
				bus.getPlaca(),
				bus.getCap_estandar(),
				bus.getCap_premiun(),
				bus.getFabricante().getId_fabricante()
				);

		return busFabricanteDto;
	}

}