package com.corhuila.tasky.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "notas")
public class Notas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "contenido")
    private String contenido;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "prioridad")
    private String prioridad;

    @Column(name = "etiqueta")
    private String etiqueta;

    @ManyToOne
    @JoinColumn(name = "usuario_ide", referencedColumnName = "id")
    private Usuario usuario; // Relación de clave externa con la entidad Usuario

}
