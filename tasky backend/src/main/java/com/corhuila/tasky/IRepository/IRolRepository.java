package com.corhuila.tasky.IRepository;


import com.corhuila.tasky.Entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Long> {
}