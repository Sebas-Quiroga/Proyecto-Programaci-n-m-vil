<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-tabs :style="{ '--background': 'white' }"> <ion-header collapse="condense"
        style="height: 80px; display: flex; justify-content: center; align-items: center; background: white;">
        <ion-toolbar>
          <div style="display: flex; align-items: center;">
            <ion-icon name="person-circle-outline" size="large"></ion-icon>
            <div style="display: flex; flex-direction: column; align-items: start;">
              <span style="margin-left: 10px;"> {{ nombre + apellido }}</span>
              <span style="margin-left: 10px;">{{ email }}</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: start;">
              <ion-button color="light" fill="clear" size="large">
                <ion-icon name="power" size="large"></ion-icon>
              </ion-button>
            </div>
          </div>
        </ion-toolbar>
      </ion-header>

      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" :style="{ '--background': 'white' }">
        <ion-tab-button tab="Buscar" href="/tabs/CLIENTE">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="checkmark-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
        <ion-tab-button tab="Buscar" href="/tabs/CLIENTE">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="search-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>

        <ion-tab-button tab="Pendientes" href="/tabs/EMPLEADO">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="person-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>

        <ion-tab-button tab="agregar" href="/tabs/ESTUDIANTE">
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
import { IonPage, IonContent } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImputComponent from '@/components/ImputComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';
import BotonatrasComponent from '@/components/BotonatrasComponent.vue';
import axios from 'axios';

let nombre = '';
let apellido = '';
let email = '';

const consultarUsuario = async () => {
  const emailGuardado = localStorage.getItem('emailUsuario'); // Obtener el email del usuario guardado

  try {
    const response = await axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`);
    
    if (response.data.length > 0) {
      const usuario = response.data[0];
      nombre = usuario.nombre;
      apellido = usuario.apellido;
      email = usuario.email;
    } else {
      console.error('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error);
  }
}

consultarUsuario();
</script>
