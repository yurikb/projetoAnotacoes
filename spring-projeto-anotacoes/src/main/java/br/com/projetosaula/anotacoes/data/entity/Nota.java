package br.com.projetosaula.anotacoes.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.projetosaula.anotacoes.data.dto.NotaDTO;

@Entity
public class Nota {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 20, nullable = false)
	private String titulo;
	
	@Column(length = 400)
	private String anotacao;
	
	@ManyToOne
	@JoinColumn(name="id_categoria")
	private Categoria categoria;
	
	public Nota() {}

	public Nota(Integer id, String titulo, String anotacao, Categoria categoria) {
		this.id = id;
		this.titulo = titulo;
		this.anotacao = anotacao;
		this.categoria = categoria;
	}
	
	public NotaDTO getDTO() {
		return new NotaDTO(getId(), getTitulo(), getAnotacao(), getCategoria().getDTO());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAnotacao() {
		return anotacao;
	}

	public void setAnotacao(String anotacao) {
		this.anotacao = anotacao;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	
	
}
