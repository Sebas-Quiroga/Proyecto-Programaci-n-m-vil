package com.corhuila.tasky.IService;


import com.corhuila.tasky.Dto.IUsuarioDto;
import com.corhuila.tasky.Entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface IUsuarioService {
    List<Usuario> findAll(); // Devuelve una lista de facturas
    Optional<Usuario> findById(Long id); // Devuelve un factura por su id
    Usuario save(Usuario usuario); // Guarda un autor
    void update(Usuario usuario, Long id); // Actualiza un autor
    void delete(Long id); // Elimina un factura
    Optional<IUsuarioDto> getValidar(String email, String password);
}
