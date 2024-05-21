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
              <ion-button color="light" fill="clear" size="large">
                <ion-icon name="power" size="large"></ion-icon>
              </ion-button>
            </div>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Buscar" href="/Tasky/realizado">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="checkmark-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
        <ion-tab-button tab="Buscar" href="">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="search-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>

        <ion-tab-button tab="agregar" href="/Tasky/evento">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="add-circle" size="large"></ion-icon>
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

const nombre = ref(''); // Asegúrate de que nombre, apellido y email estén disponibles en este ámbito
const apellido = ref('');
const email = ref('');
const id = ref('');

const logout = () => {
  // Lógica para cerrar sesión
}

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
}

// Llamar a la función consultarUsuario cuando el componente se monta
onMounted(() => {
  consultarUsuario();
});
</script>
