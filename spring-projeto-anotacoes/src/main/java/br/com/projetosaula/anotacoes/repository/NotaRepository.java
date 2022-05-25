package br.com.projetosaula.anotacoes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.projetosaula.anotacoes.data.entity.Nota;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Integer> {

	public List<Nota> findByTituloContaining(String titulo);
}
