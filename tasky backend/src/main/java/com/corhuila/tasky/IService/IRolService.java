package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Rol;

import java.util.List;
import java.util.Optional;

public interface IRolService {
    List<Rol> findAll(); // Devuelve una lista de clientes
    Optional<Rol> findById(long id); // Devuelve un cliente por su id
    Rol save(Rol rol); // Guarda un libro
    void update(Rol rol, long id); // Actualiza un libro
    void delete(long id); // Elimina un cliente


}
