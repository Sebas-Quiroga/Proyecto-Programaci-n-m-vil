package com.corhuila.tasky.Controller;


import com.corhuila.tasky.Entity.Rol;
import com.corhuila.tasky.IService.IRolService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/Rol")
public class RolController {
    //Inyectar el servicio
    @Autowired
    private IRolService service;

    @GetMapping("/Roles")
    public List<Rol> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Rol> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/nuevo")
    public Rol save(@RequestBody Rol rol) {
        return service.save(rol);
    }


    @PutMapping("/{id}")
    public void update(@RequestBody Rol rol, @PathVariable Long id) {
        service.update(rol, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
