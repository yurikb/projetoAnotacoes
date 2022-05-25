package br.com.projetosaula.anotacoes.controller;

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

import br.com.projetosaula.anotacoes.data.dto.CategoriaDTO;
import br.com.projetosaula.anotacoes.service.CategoriaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/categoria")
public class CategoriasController {

	@Autowired
	CategoriaService service;

	@GetMapping
	public List<CategoriaDTO> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public CategoriaDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}
	
	@PostMapping
	public ResponseEntity<CategoriaDTO> save(@RequestBody CategoriaDTO categoria) {
		return new ResponseEntity<CategoriaDTO>(service.save(categoria), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idCategoria) throws Exception {
		return new ResponseEntity<>(service.delete(idCategoria), HttpStatus.OK);
	}
	
	
	@PutMapping("/toggleAtivo")
	public ResponseEntity<Boolean> toggleAtivo(@RequestBody Integer idCategoria) throws Exception {
		return new ResponseEntity<>(service.toggle(idCategoria), HttpStatus.ACCEPTED);
	}
}
