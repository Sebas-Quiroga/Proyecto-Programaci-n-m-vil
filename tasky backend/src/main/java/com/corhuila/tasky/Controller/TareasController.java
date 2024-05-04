package com.corhuila.tasky.Controller;


import com.corhuila.tasky.Entity.Tareas;

import com.corhuila.tasky.IService.ITareasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/Tareas")
public class TareasController {
    //Inyectar el servicio
    @Autowired
    private ITareasService service;

    @GetMapping()
    public List<Tareas> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Tareas> findById(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping()
    public Tareas save(@RequestBody Tareas tareas) {
        return service.save(tareas);
    }


    @PutMapping("/{id}")
    public void update(@RequestBody Tareas tareas, @PathVariable int id) {
        service.update(tareas, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
}
