package com.corhuila.tasky.IRepository;



import com.corhuila.tasky.Entity.Notas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface INotasRepository extends JpaRepository<Notas, Long> {
    List<Notas> findByUsuarioId(Long usuario_id);
}
