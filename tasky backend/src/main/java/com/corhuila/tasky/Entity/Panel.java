package com.corhuila.tasky.Entity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "panel")
public class Panel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "iduser")
    private Usuario usuario;

    @Column(name = "name_of_task")
    private String nameOfTask;

    @Column(name = "fecha_ini")
    private LocalDate fechaIni;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    @Column(name = "evento")
    private byte evento;

    @OneToOne(mappedBy = "panel", cascade = CascadeType.ALL)
    private Tareas tareas;
}