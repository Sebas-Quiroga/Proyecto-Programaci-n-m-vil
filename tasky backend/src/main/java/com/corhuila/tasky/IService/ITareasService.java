package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Tareas;

import java.util.List;
import java.util.Optional;

public interface ITareasService {
    List<Tareas> findAll(); // Devuelve una lista de clientes
    Optional<Tareas> findById(long id); // Devuelve un cliente por su id
    Tareas save(Tareas tareas); // Guarda un tareas
    void update(Tareas tareas, long id); // Actualiza un libro
    void delete(long id);
    List<Tareas> getPanelsByUsuarioId(int usuarioId);
}
