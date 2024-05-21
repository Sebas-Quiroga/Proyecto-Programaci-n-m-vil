package com.corhuila.tasky.Entity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "tareas")
public class Tareas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "ini")
    private LocalDate ini;

    @Column(name = "fin")
    private LocalDate fin;

    @Column(name = "evento")
    private byte evento;
    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario; // Relación de clave externa con la entidad Usuario

}