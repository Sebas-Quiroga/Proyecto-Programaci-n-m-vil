package com.corhuila.tasky.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name ="email")
    private String email;

    @Column(name ="password")
    private String password;
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private Collection<Panel> paneles;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "usuario_rol",
            joinColumns = { @JoinColumn(name = "usuario_id") },
            inverseJoinColumns = { @JoinColumn(name = "rol_id") }
    )
    private Set<Rol> roles = new HashSet<>();
    // Métodos para manejar la relación entre usuario y roles



}
