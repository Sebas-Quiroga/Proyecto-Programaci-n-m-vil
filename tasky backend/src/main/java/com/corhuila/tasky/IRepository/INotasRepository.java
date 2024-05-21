package com.corhuila.tasky.IRepository;



import com.corhuila.tasky.Entity.Notas;
import com.corhuila.tasky.Entity.Tareas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface INotasRepository extends JpaRepository<Notas, Integer> {
    List<Tareas> findByUsuarioId(int usuarioIde);
}
