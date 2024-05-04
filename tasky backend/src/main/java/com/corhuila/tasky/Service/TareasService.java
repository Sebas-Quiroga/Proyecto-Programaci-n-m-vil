package com.corhuila.tasky.Service;


import com.corhuila.tasky.Entity.Tareas;
import com.corhuila.tasky.IRepository.IPanelRepository;
import com.corhuila.tasky.IRepository.ITareaRepository;
import com.corhuila.tasky.IService.IPanelService;
import com.corhuila.tasky.IService.ITareasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TareasService implements ITareasService {

    //Conectar con los datos - IRepository
    // Inyección de dependencia
    @Autowired
    private ITareaRepository repository;


    @Override
    public List<Tareas> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Tareas> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Tareas save(Tareas tareas) {
        return repository.save(tareas);
    }

    @Override
    public void update(Tareas tareas, int id) {
        //Obtener el objeto libro y el id
        //Verificar con el id, si exiten los datos
        Optional<Tareas> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Tareas tareasUpdate = ps.get();
            tareasUpdate.setNotas(tareas.getNotas());
            tareasUpdate.setPanel(tareas.getPanel());
            tareasUpdate.setId_panel(tareas.getId_panel());


            //Actualizar el objeto libro
            repository.save(tareasUpdate);
        }else{
            System.out.println("No existe el libro");
        }
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
