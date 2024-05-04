package com.corhuila.tasky.Entity;


import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDate;


@Data
@Entity
@Table(name = "panel")
public class Panel {

    @Id
    private int id;

    private int iduser; // Llave foránea que referencia la tabla usuarios
    private String name_of_task;
    private LocalDate fecha_ini;
    private LocalDate fecha_fin;
    private byte evento;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id", insertable = false, updatable = false)
    private Usuario usuario; // Relación con la tabla usuarios

    @OneToOne
    private Tareas tareas;


}
