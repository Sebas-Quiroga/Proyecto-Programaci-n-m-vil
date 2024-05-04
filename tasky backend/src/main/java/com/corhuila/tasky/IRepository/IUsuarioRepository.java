package com.corhuila.tasky.IRepository;


import com.corhuila.tasky.Dto.IUsuarioDto;
import com.corhuila.tasky.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query(value = "SELECT * FROM usuario WHERE email = :email AND password = :password ",nativeQuery = true)
    Optional<IUsuarioDto> getValidar(String email, String password);
}
