package com.corhuila.tasky.Entity;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "tareas")
public class Tareas {

    @Id
    private int id;
    private int id_panel; //llave foranea de panel

    private String notas;

    @OneToOne // metodo llave foranea
    @JoinColumn(name = "id_panel", referencedColumnName = "id", insertable = false, updatable = false)
    private Panel panel; // Relación con la tabla Panel

}
