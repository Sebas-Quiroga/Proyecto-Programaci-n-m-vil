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
import axios from 'axios';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime
  },
  data() {
    return {
      panels: [],
      nuevoPanel: {
        nameOfTask: '',
        fechaIni: '',
        fechaFin: ''
      },
      usuarioId: null
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
            this.usuarioId = usuario.id;
            this.fetchPanels();
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchPanels() {
      axios.get(`http://localhost:9000/Tasky/api/Panel/usuario/${this.usuarioId}`)
        .then(response => {
          this.panels = response.data.filter(panel => panel.evento === 0);
          console.log('Datos de los paneles filtrados:', this.panels);
        })
        .catch(error => {
          console.error('Hubo un problema al obtener los datos de la API.', error);
        });
    },
    changeEventToZero(panelId) {
      const panel = this.panels.find(p => p.id === panelId);
      if (panel) {
        panel.evento = 1;
        axios.put(`http://localhost:9000/Tasky/api/Panel/${panelId}`, panel)
          .then(response => {
            console.log(`Evento del Panel ID ${panelId} cambiado a ${panel.evento}`);
            this.fetchPanels();
          })
          .catch(error => {
            console.error(`Hubo un problema al actualizar el evento del Panel ID ${panelId} en la API.`, error);
          });
      }
    },
    agregarPanel() {
      const nuevoPanelConUsuario = { 
        ...this.nuevoPanel, 
        usuario: { id: this.usuarioId },
        evento: 0 // Inicializa el evento a 0
      };
      axios.post('http://localhost:9000/Tasky/api/Panel', nuevoPanelConUsuario)
        .then(response => {
          console.log('Panel agregado:', response.data);
          this.nuevoPanel.nameOfTask = '';
          this.nuevoPanel.fechaIni = '';
          this.nuevoPanel.fechaFin = '';
          this.fetchPanels();
        })
        .catch(error => {
          console.error('Hubo un problema al agregar el nuevo panel.', error);
        });
    }
  }
});
</script>
<style scoped>
.header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  
  h2 {
    text-align: center;
    margin: 0;
    font-size: 24px;
  }
</style>