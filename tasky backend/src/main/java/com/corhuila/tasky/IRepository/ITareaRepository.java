package com.corhuila.tasky.IRepository;



import com.corhuila.tasky.Entity.Tareas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITareaRepository extends JpaRepository<Tareas, Integer> {

}
