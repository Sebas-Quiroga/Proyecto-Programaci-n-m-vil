package com.corhuila.tasky.Entity;

import jakarta.persistence.*;
import lombok.Data;



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

	
}
