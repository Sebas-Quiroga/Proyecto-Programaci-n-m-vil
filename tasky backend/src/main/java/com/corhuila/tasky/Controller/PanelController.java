package com.corhuila.tasky.Controller;


import com.corhuila.tasky.Entity.Panel;
import com.corhuila.tasky.IService.IPanelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/Panel")
public class PanelController {
    //Inyectar el servicio
    @Autowired
    private IPanelService service;

    @GetMapping("/vista")
    public List<Panel> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Panel> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/crear")
    public Panel save(@RequestBody Panel panel) {
        return service.save(panel);
    }


    @PutMapping("/{id}")
    public void update(@RequestBody Panel panel, @PathVariable Long id) {
        service.update(panel, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Panel> getPanelsByUsuarioId(@PathVariable Long usuarioId) {
        return service.getPanelsByUsuarioId(usuarioId);
    }
}
