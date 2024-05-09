package com.corhuila.tasky.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;


@Data
@Entity
@Table(name = "rol")
public class Rol {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nombre;



	public Rol(Long id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
	}

	public Rol() {

	}

	public Rol(String nombre) {
		super();
		this.nombre = nombre;
	}
	@ManyToMany(mappedBy = "roles")
	private Set<Usuario> usuarios = new HashSet<>();
	// Métodos para manejar la relación entre roles y usuarios
	
}
