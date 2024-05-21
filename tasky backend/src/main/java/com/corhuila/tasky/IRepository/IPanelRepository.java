package com.corhuila.tasky.IRepository;


import com.corhuila.tasky.Entity.Panel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPanelRepository extends JpaRepository<Panel, Long> {

}
