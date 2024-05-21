package com.corhuila.tasky.IRepository;


import com.corhuila.tasky.Entity.Panel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPanelRepository extends JpaRepository<Panel, Long> {
    List<Panel> findAllByUsuarioIdAndEvento(Long usuarioId, int evento);

}
