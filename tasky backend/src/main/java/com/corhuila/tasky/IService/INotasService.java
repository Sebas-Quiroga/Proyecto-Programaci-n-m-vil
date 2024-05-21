package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Notas;
import com.corhuila.tasky.Entity.Tareas;

import java.util.List;
import java.util.Optional;

public interface INotasService {
    List<Notas> findAll(); // Devuelve una lista de clientes
    Optional<Notas> findById(int id); // Devuelve un cliente por su id
    Notas save(Notas notas); // Guarda un libro
    void update(Notas notas, int id); // Actualiza un libro
    void delete(int id); // Elimina un cliente
    List<Tareas> getNotassByUsuarioId(int usuarioIde);

}
