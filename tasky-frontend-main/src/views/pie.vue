<template>
  <ion-page>
    <ion-tabs>
      <ion-header>
        <ion-toolbar>
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <div style="display: flex; align-items: center;">
              <ion-icon name="person-circle-outline" size="large"></ion-icon>
              <div style="display: flex; flex-direction: column; align-items: start;">
                <span style="margin-left: 10px;">{{ nombre + ' ' + apellido }}</span>
                <span style="margin-left: 10px;">{{ email }}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center;">
              <ion-button color="light" fill="clear" size="large" @click="logout">
                <ion-icon name="power" size="large"></ion-icon>
              </ion-button>
            </div>
          </div>
        </ion-toolbar>
      </ion-header>

      
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="realizado" href="/Tasky/realizado">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" size="large">
            <ion-icon name="checkmark-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
        <ion-tab-button tab="tarea" href="/Tasky/Tareas">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" size="large">
            <ion-icon name="calendar-number-outline" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
        <ion-tab-button tab="agregar" href="/Tasky/notas">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-button color="light" size="large">
            <ion-icon name="file-tray-outline" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButton } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import axios from 'axios';
import { useRouter } from 'vue-router';

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const id = ref('');

const router = useRouter();

const logout = () => {
  localStorage.removeItem('emailUsuario'); // Eliminar el email guardado en el localStorage
  localStorage.removeItem('idUsuario'); // Eliminar el ID del usuario guardado en el localStorage
  router.push('/login'); // Redirigir a la página de inicio de sesión
};

const consultarUsuario = async () => {
  const emailGuardado = localStorage.getItem('emailUsuario'); // Obtener el email del usuario guardado

  try {
    const response = await axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`);
    
    if (response.data.length > 0) {
      const usuario = response.data[0];

      nombre.value = usuario.nombre;
      apellido.value = usuario.apellido;
      email.value = usuario.email;
      id.value = usuario.id;

      // Guardar el ID del usuario en otra variable local
      const idUsuario = usuario.id;
      localStorage.setItem('idUsuario', idUsuario);
    } else {
      console.error('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error);
  }
};

// Llamar a la función consultarUsuario cuando el componente se monta
onMounted(() => {
  consultarUsuario();
});
</script>
