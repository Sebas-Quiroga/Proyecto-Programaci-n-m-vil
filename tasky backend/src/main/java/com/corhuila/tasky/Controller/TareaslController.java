package com.corhuila.tasky.Controller;


import com.corhuila.tasky.Entity.Tareas;
import com.corhuila.tasky.IService.ITareasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/Panel")
public class TareaslController {
    //Inyectar el servicio
    @Autowired
    private ITareasService service;

    @GetMapping("/vista")
    public List<Tareas> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Tareas> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/crear")
    public Tareas save(@RequestBody Tareas tareas) {
        return service.save(tareas);
    }


    @PutMapping("/{id}")
    public void update(@RequestBody Tareas tareas, @PathVariable Long id) {
        service.update(tareas, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/vista/{usuarioId}")
    public List<Tareas> getPanelsByUsuarioId(@PathVariable int usuarioId) {
        return service.getPanelsByUsuarioId(usuarioId);
    }
}
