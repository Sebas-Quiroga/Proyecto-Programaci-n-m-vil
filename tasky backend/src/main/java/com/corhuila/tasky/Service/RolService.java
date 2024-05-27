package com.corhuila.tasky.Service;


import com.corhuila.tasky.Entity.Rol;
import com.corhuila.tasky.IRepository.IRolRepository;
import com.corhuila.tasky.IService.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService implements IRolService {

    //Conectar con los datos - IRepository
    // Inyección de dependencia
    @Autowired
    private IRolRepository repository;


    @Override
    public List<Rol> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Rol> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Rol save(Rol rol) {
        return repository.save(rol);
    }

    @Override
    public void update(Rol rol, long id) {
        //Obtener el objeto libro y el id
        //Verificar con el id, si exiten los datos
        Optional<Rol> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Rol rolUpdate = ps.get();



            //Actualizar el objeto libro
            repository.save(rolUpdate);
        }else{
            System.out.println("No existe el libro");
        }
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }

}
