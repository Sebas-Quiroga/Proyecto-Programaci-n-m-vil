package com.corhuila.tasky.IService;


import com.corhuila.tasky.Entity.Panel;

import java.util.List;
import java.util.Optional;

public interface IPanelService {
    List<Panel> findAll(); // Devuelve una lista de clientes
    Optional<Panel> findById(int id); // Devuelve un cliente por su id
    Panel save(Panel panel); // Guarda un libro
    void update(Panel panel, int id); // Actualiza un libro

    List<Panel> getPanelsByUsuarioId(int usuarioId);

    void delete(int id); // Elimina un cliente
}
