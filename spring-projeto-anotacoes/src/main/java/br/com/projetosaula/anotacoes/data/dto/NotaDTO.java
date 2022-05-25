package br.com.projetosaula.anotacoes.data.dto;

import java.io.Serializable;

import br.com.projetosaula.anotacoes.data.entity.Nota;

public class NotaDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Integer idNota;	
	private String tituloNota;	
	private String textoAnotacao;	
	private CategoriaDTO categoria;
	
	public NotaDTO() {}
	
	public Nota convertToEntity() {
		return new Nota(getIdNota(), 
						getTituloNota(),
						getTextoAnotacao(), 
						getCategoria().convertToEntity());
	}

	public NotaDTO(Integer idNota, String tituloNota, String textoAnotacao, CategoriaDTO categoria) {
		this.idNota = idNota;
		this.tituloNota = tituloNota;
		this.textoAnotacao = textoAnotacao;
		this.categoria = categoria;
	}

	public Integer getIdNota() {
		return idNota;
	}

	public void setIdNota(Integer idNota) {
		this.idNota = idNota;
	}

	public String getTituloNota() {
		return tituloNota;
	}

	public void setTituloNota(String tituloNota) {
		this.tituloNota = tituloNota;
	}

	public String getTextoAnotacao() {
		return textoAnotacao;
	}

	public void setTextoAnotacao(String textoAnotacao) {
		this.textoAnotacao = textoAnotacao;
	}

	public CategoriaDTO getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaDTO categoria) {
		this.categoria = categoria;
	}
	
	
	
}
