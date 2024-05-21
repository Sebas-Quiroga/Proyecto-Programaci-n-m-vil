package com.corhuila.tasky.Service;


import com.corhuila.tasky.Entity.Notas;
import com.corhuila.tasky.Entity.Tareas;
import com.corhuila.tasky.IRepository.INotasRepository;
import com.corhuila.tasky.IService.INotasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotasService implements INotasService {

    //Conectar con los datos - IRepository
    // Inyección de dependencia
    @Autowired
    private INotasRepository repository;


    @Override
    public List<Notas> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Notas> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Notas save(Notas notas) {
        return repository.save(notas);
    }

    @Override
    public void update(Notas notas, int id) {
        //Obtener el objeto libro y el id
        //Verificar con el id, si exiten los datos
        Optional<Notas> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Notas tareasUpdate = ps.get();
            tareasUpdate.setEvento(notas.getEvento());


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

    @Override
    public List<Tareas> getNotassByUsuarioId(int usuarioIde) {
        return repository.findByUsuarioId(usuarioIde);
    }
}
