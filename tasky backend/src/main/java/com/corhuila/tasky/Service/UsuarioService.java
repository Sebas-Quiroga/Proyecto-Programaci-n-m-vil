package com.corhuila.tasky.Service;


import com.corhuila.tasky.Dto.IUsuarioDto;
import com.corhuila.tasky.Entity.Usuario;
import com.corhuila.tasky.IRepository.IUsuarioRepository;
import com.corhuila.tasky.IService.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class  UsuarioService implements IUsuarioService {

    //Conectar con los datos - IRepository
    // Inyección de dependencia
    @Autowired
    private IUsuarioRepository repository;


    @Override
    public List<Usuario> findAll() {
       return repository.findAll();
    }

    @Override
    public Optional<Usuario> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Usuario save(Usuario usuario) {
        return repository.save(usuario);
    }

    @Override
    public void update(Usuario usuario, Long id) {
        //Obtener el objeto autor y el id
        //Verificar con el id, si exiten los datos
        Optional<Usuario> ps = repository.findById(id);

        //Cargar nuevo objeto
        if (!ps.isEmpty()){
            Usuario usuarioUpdate = ps.get();
            usuarioUpdate.setNombre(usuario.getNombre());
            usuarioUpdate.setApellido(usuario.getApellido());
            usuarioUpdate.setEmail(usuario.getEmail());
            usuarioUpdate.setPassword(usuario.getPassword());
            usuarioUpdate.setRoles(usuario.getRoles());

            //Actualizar el objeto autor
            repository.save(usuarioUpdate);
        }else{
            System.out.println("No existe el autor");
        }
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<IUsuarioDto> getValidar(String  email, String password) {
        return repository.getValidar(email,password);
    }
}
