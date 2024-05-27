package com.corhuila.tasky;


import com.corhuila.tasky.Entity.Rol;
import com.corhuila.tasky.Entity.Usuario;
import com.corhuila.tasky.IRepository.IRolRepository;
import com.corhuila.tasky.IRepository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IRolRepository rolRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verificar si ya hay usuarios en la base de datos
        if (usuarioRepository.count() == 0 ) {
            // Crear usuarios por defecto
            Usuario usuario1 = new Usuario();
            usuario1.setNombre("sebastian");
            usuario1.setApellido("quiroga");
            usuario1.setEmail("admin@admin.com");
            usuario1.setPassword("1234");
            // Guardar usuarios en la base de datos

            usuarioRepository.save(usuario1);

        }
      if(rolRepository.count() == 0){
          Rol rolAdmin = new Rol();
          rolAdmin.setNombre("ROLE_ADMIN");

          Rol rolUser = new Rol();
          rolUser.setNombre("ROLE_USER");

          // Guardar roles en la base de datos
          rolRepository.save(rolAdmin);
          rolRepository.save(rolUser);
        }
    }
}
