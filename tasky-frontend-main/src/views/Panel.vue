<template>
  <ion-page>
    <ion-content>
      <ion-card v-for="panel in panels" :key="panel.id" class="custom-rounded">
       
        <ion-card-content>
          <ion-item>
            <ion-text>Nombre: {{ panel.name }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Fecha de Inicio: {{ panel.ini }}</ion-text>
          </ion-item>
          <ion-item>
            <ion-text>Fecha de Fin: {{ panel.fin }}</ion-text>
          </ion-item>
          <ion-button @click="changeEventToZero(panel.id)" fill="clear">
            <ion-icon name="checkmark-circle" size="large"></ion-icon>
          </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-button color="light" size="large"  href="/Tasky/evento">
            <ion-icon name="add-circle" size="large" ></ion-icon>
          </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonText,
    IonButton,
    IonIcon
  },
  data() {
    return {
      panels: []
    };
  },
  mounted() {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      const emailGuardado = localStorage.getItem('emailUsuario');
      axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`)
        .then(response => {
          if (response.data.length > 0) {
            const usuario = response.data[0];
            const idUsuario = usuario.id;
            this.mostrarPaneles(idUsuario);
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    mostrarPaneles(idUsuario) {
      axios.get(`http://localhost:9000/Tasky/api/Panel/vista/${idUsuario}`)
        .then(response => {
          this.panels = response.data.filter(panel => panel.evento === 0);
          console.log('Datos de los paneles filtrados:', this.panels);
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al obtener los datos de la API.');
        });
    },
    changeEventToZero(panelId) {
      const panel = this.panels.find(p => p.id === panelId);
      if (panel) {
        // Actualizar el evento localmente
        panel.evento = 1;
        // Realizar la solicitud PUT a la API para actualizar el evento en la base de datos
        axios.put(`http://localhost:9000/Tasky/api/Panel/tareas/${panelId}`, { evento: 1 })
          .then(response => {
            console.log(`Evento del Panel ID ${panelId} actualizado a 1 en la base de datos`);
            window.location.reload();
          })
          .catch(error => {
            console.error('Error al actualizar el evento en la base de datos:', error);
            // Revertir el cambio si hay un error
            panel.evento = 0;
            alert('Hubo un problema al actualizar el evento en la base de datos.');
          });
      }
    }
  }
});
</script>