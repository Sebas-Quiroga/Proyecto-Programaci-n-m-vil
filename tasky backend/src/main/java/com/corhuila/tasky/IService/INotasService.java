package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Notas;

import java.util.List;
import java.util.Optional;

public interface INotasService {
    List<Notas> findAll(); // Devuelve una lista de clientes
    Optional<Notas> findById(long id); // Devuelve un cliente por su id
    Notas save(Notas notas); // Guarda un libro
    void update(Notas notas, long id); // Actualiza un libro
    void delete(long id); // Elimina un cliente
    List<Notas> NotassByUsuarioId(long usuarioId);

}
