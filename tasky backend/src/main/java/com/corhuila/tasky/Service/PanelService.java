package com.corhuila.tasky.Service;


import com.corhuila.tasky.Entity.Panel;
import com.corhuila.tasky.IRepository.IPanelRepository;
import com.corhuila.tasky.IService.IPanelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanelService implements IPanelService {

    //Conectar con los datos - IRepository
    // Inyección de dependencia
    @Autowired
    private IPanelRepository repository;


    @Override
    public List<Panel> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Panel> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Panel save(Panel libro) {
        return repository.save(libro);
    }

    @Override
    public void update(Panel panel, int id) {
        //Obtener el objeto libro y el id
        //Verificar con el id, si exiten los datos
        Optional<Panel> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Panel panelUpdate = ps.get();
            panelUpdate.setEvento(panel.getEvento());
            panelUpdate.setIduser(panel.getIduser());
            panelUpdate.setFecha_ini(panel.getFecha_ini());
            panelUpdate.setFecha_fin(panel.getFecha_fin());

            //Actualizar el objeto libro
            repository.save(panelUpdate);
        }else{
            System.out.println("No existe el libro");
        }
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
