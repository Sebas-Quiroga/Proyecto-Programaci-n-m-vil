<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
      <h2>Agregar | Tareal</h2>
      <ion-card class="custom-rounded">
        <form @submit.prevent="agregarPanel">
          <ion-item>
            <ion-label>Nombre:</ion-label>
            <ion-input v-model="nuevoPanel.name" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Fecha de Inicio:</ion-label>
            <ion-input type="date" v-model="nuevoPanel.ini" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Fecha de Fin:</ion-label>
            <ion-input type="date" v-model="nuevoPanel.fin" required></ion-input>
          </ion-item>
          <ion-input type="hidden" v-model="nuevoPanel.usuario_id" :value="usuarioId" />
          <ButtonComponent
            id="Crear"
            value="crear"
            fill="solid"
            color="warning"
            expand="block"
            size="large"
            class="custom-button-width"
            @click="agregarPanel"
          >
          </ButtonComponent>
         
        </form>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImputComponent from '@/components/ImputComponent.vue';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    ButtonComponent,
    ImputComponent
  },
  data() {
    return {
      nuevoPanel: {
        name: '',
        ini: '',
        fin: '',
        evento: 0, // Valor predeterminado del evento es 0
        usuario_id: '' // Variable para almacenar el ID del usuario logueado
      }
    };
  },
  computed: {
    usuarioId() {
      // Aquí debes acceder al ID del usuario logueado en tu lógica de autenticación
      // y devolverlo como el ID del usuario actualmente logueado
      return 'ID_DEL_USUARIO_LOGUEADO';
    }
  },
  methods: {
    agregarPanel() {
      fetch('http://localhost:9000/Tasky/api/Panel/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.nuevoPanel)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo crear el nuevo panel.');
          }
          return response.json();
        })
        .then(data => {
          console.log('Nuevo Panel creado:', data);
          this.nuevoPanel = {
            name: '',
            ini: '',
            fin: '',
            evento: 0, // Restablecer el valor del evento a 0 después de crear el panel
            
          };
          window.location.href = '/Tasky/panel'; // Redirigir a la página /Tasky/panel
          
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al crear el nuevo panel.');
        });
    }
  }
});
</script>