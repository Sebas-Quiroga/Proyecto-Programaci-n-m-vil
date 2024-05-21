<template>
  
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
      <ion-card v-for="panel in panels" :key="panel.id" class="custom-rounded">
        <ion-card-header>
          <ion-card-title>Panel ID: {{ panel.id }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Nombre: {{ panel.name }}</p>
          <p>Fecha de Inicio: {{ panel.ini }}</p>
          <p>Fecha de Fin: {{ panel.fin }}</p>
          <p>Evento: {{ panel.evento }}</p>
          <ion-button @click="changeEventToZero(panel.id)"> <ion-icon name="checkmark-circle" size="large"></ion-icon></ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon
  },
  data() {
    return {
      panels: []
    };
  },
  mounted() {
    this.fetchPanels();
  },
  methods: {
    fetchPanels() {
      fetch('http://localhost:9000/Tasky/api/Panel/vista')
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudieron obtener los datos de la API.');
          }
          return response.json();
        })
        .then(data => {
          // Filtrar los paneles para que solo se incluyan aquellos con evento igual a 0
          this.panels = data.filter(panel => panel.evento === 0);
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
        panel.evento = 1;
        // Aquí puedes realizar una solicitud PUT a la API para actualizar el evento a 0
        console.log(`Evento del Panel ID ${panelId} cambiado a 1`);
      }
    }
  }
});
</script>