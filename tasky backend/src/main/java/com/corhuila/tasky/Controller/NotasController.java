package com.corhuila.tasky.Controller;


import com.corhuila.tasky.Entity.Notas;

import com.corhuila.tasky.Entity.Tareas;
import com.corhuila.tasky.IService.INotasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/Tareas")
public class NotasController {
    //Inyectar el servicio
    @Autowired
    private INotasService service;

    @GetMapping("/vista")
    public List<Notas> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Notas> findById(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping("/guardar")
    public Notas save(@RequestBody Notas notas) {
        return service.save(notas);
    }


    @PutMapping("/{id}")
    public void update(@RequestBody Notas notas, @PathVariable int id) {
        service.update(notas, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
    @GetMapping("/vista/notas/{usuarioIde}")
    public List<Tareas> getNotassByUsuarioId(@PathVariable int usuarioIde) {
        return service.getNotassByUsuarioId(usuarioIde);
    }
}
