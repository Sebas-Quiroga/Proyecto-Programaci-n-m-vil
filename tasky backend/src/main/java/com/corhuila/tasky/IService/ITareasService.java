package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Tareas;

import java.util.List;
import java.util.Optional;

public interface ITareasService {
    List<Tareas> findAll(); // Devuelve una lista de clientes
    Optional<Tareas> findById(int id); // Devuelve un cliente por su id
    Tareas save(Tareas tareas); // Guarda un libro
    void update(Tareas tareas, int id); // Actualiza un libro
    void delete(int id); // Elimina un cliente
}
