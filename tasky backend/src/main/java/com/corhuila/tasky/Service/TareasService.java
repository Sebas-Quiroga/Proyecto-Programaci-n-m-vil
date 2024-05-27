package com.corhuila.tasky.Service;


import com.corhuila.tasky.Entity.Tareas;
import com.corhuila.tasky.IRepository.ITareasRepository;
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
    private ITareasRepository repository;


    @Override
    public List<Tareas> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Tareas> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Tareas save(Tareas libro) {
        return repository.save(libro);
    }

    @Override
    public void update(Tareas tareas, long id) {
        //Obtener el objeto libro y el id
        //Verificar con el id, si exiten los datos
        Optional<Tareas> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Tareas tareasUpdate = ps.get();
            tareasUpdate.setEvento(tareas.getEvento());


            //Actualizar el objeto libro
            repository.save(tareasUpdate);
        }else{
            System.out.println("No existe el libro");
        }
    }


    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }

    @Override public List<Tareas> getPanelsByUsuarioId(int usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }
}
