package br.com.projetosaula.anotacoes.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.projetosaula.anotacoes.data.dto.CategoriaDTO;

@Entity
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false, length = 20)
	private String descricao;
	
	@Column(name = "flativo", nullable=false)
	private boolean flAtivo;
	
    public Categoria() {}

	public Categoria(Integer id, String descricao, boolean flAtivo) {
		this.id = id;
		this.descricao = descricao;
		this.flAtivo = flAtivo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isFlAtivo() {
		return flAtivo;
	}

	public void setFlAtivo(boolean flAtivo) {
		this.flAtivo = flAtivo;
	}

	public CategoriaDTO getDTO() {
		return new CategoriaDTO(getId(), getDescricao(), isFlAtivo());
	}
    
    
}
