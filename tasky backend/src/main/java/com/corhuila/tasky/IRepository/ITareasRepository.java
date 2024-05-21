package com.corhuila.tasky.IRepository;


import com.corhuila.tasky.Entity.Tareas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITareasRepository extends JpaRepository<Tareas, Long> {

    List<Tareas> findByUsuarioId(int usuarioId);
}
