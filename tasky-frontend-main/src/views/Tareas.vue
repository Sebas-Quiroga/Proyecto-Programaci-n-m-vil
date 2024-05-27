<template>
  <ion-page>
    <ion-content>
      <div id="container">
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
            <ion-button color="success" @click="changeEventToZero(panel.id)" fill="clear">
              <ion-icon name="checkmark-circle" size="large"></ion-icon>
            </ion-button>
            <ion-button color="warning" @click="editPanel(panel.id)" fill="clear">
              <ion-icon name="create-outline" size="large"></ion-icon>
            </ion-button>
            <ion-button color="danger" @click="deletePanel(panel.id)" fill="clear">
              <ion-icon name="trash" size="large"></ion-icon>
            </ion-button>
          </ion-card-content>
        </ion-card>

        <ion-button color="light" size="large" class="ion-float" href="/Tasky/tareas/guardar">
        <ion-icon name="add-circle" size="large"></ion-icon>
        </ion-button>

        <!-- Modal para agregar o editar paneles -->
        <ion-modal :is-open="modalIsOpen" @didDismiss="modalIsOpen = false" :css-class="['my-custom-modal']">
          <div class="modal-content">
            <div id="data-form">
              <ion-item>
                <ion-label position="stacked">Nombre</ion-label>
                <ion-input v-model="panelForm.name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Fecha de Inicio</ion-label>
                <ion-input v-model="panelForm.ini"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Fecha de Fin</ion-label>
                <ion-input v-model="panelForm.fin"></ion-input>
              </ion-item>
            </div>
            <div>
              <ion-button @click="savePanel">Guardar</ion-button>
              <ion-button @click="modalIsOpen = false">Cancelar</ion-button>
            </div>
          </div>
        </ion-modal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonCard, IonCardContent, IonItem, IonText, IonButton, IonIcon, IonModal, IonLabel, IonInput
} from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

<<<<<<< HEAD
=======
const baseURL = "http://192.168.193.209:9000/Tasky/api";

>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
export default defineComponent({
  components: {
    IonPage, IonContent, IonCard, IonCardContent, IonItem, IonText, IonButton, IonIcon, IonModal, IonLabel, IonInput
  },
  data() {
    return {
      panels: [],
      panelForm: { id: '', name: '', ini: '', fin: '' },
      modalIsOpen: false
    };
  },
  mounted() {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      const emailGuardado = localStorage.getItem('emailUsuario');
<<<<<<< HEAD
      axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`)
=======
      axios.get(baseURL+`/Usuario?email=${emailGuardado}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
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
<<<<<<< HEAD
      axios.get(`http://localhost:9000/Tasky/api/Tareas/vista/${idUsuario}`)
=======
      axios.get(baseURL+`/Tareas/vista/${idUsuario}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
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
    panel.evento = 0;
<<<<<<< HEAD
    axios.put(`http://localhost:9000/Tasky/api/Tareas/${panelId}`, { evento: 1 })
=======
    axios.put(baseURL+`/Tareas/${panelId}`, { evento: 1 })
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
      .then(response => {
        console.log(`Evento del Panel ID ${panelId} actualizado a 0 en la base de datos`);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al actualizar el evento en la base de datos:', error);
        panel.evento = 1;
        alert('Hubo un problema al actualizar el evento en la base de datos.');
      });
  } else {
    console.error(`Panel con ID ${panelId} no encontrado.`);
  }
},
    openModalAdd() {
      this.panelForm = { id: '', name: '', ini: '', fin: '' };
      this.modalIsOpen = true;
    },


    editPanel(panelId) {
      const panel = this.panels.find(p => p.id === panelId);
      if (panel) {
        this.panelForm = { ...panel };
        this.modalIsOpen = true;
      }
    },


    savePanel() {
      if (this.panelForm.id) {
        this.updatePanel();
      } else {
        this.createPanel();
      }
    },
    createPanel() {
      const emailGuardado = localStorage.getItem('emailUsuario');
<<<<<<< HEAD
      axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`)
=======
      axios.get(baseURL+`/Usuario?email=${emailGuardado}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(response => {
          if (response.data.length > 0) {
            const usuario = response.data[0];
            const idUsuario = usuario.id;
<<<<<<< HEAD
            axios.post(`http://localhost:9000/Tasky/api/Tareas`, { ...this.panelForm, userId: idUsuario })
=======
            axios.post(baseURL+`/Tareas`, { ...this.panelForm, userId: idUsuario })
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
              .then(() => {
                this.mostrarPaneles(idUsuario);
                this.modalIsOpen = false;
              })
              .catch(error => {
                console.error('Error al crear el panel:', error);
              });
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    updatePanel() {
<<<<<<< HEAD
      axios.put(`http://localhost:9000/Tasky/api/Tareas/${this.panelForm.id}`, this.panelForm)
=======
      axios.put(baseURL+`/Tareas/${this.panelForm.id}`, this.panelForm)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(() => {
          const index = this.panels.findIndex(p => p.id === this.panelForm.id);
          if (index !== -1) {
            this.panels[index] = { ...this.panelForm }; // Actualizar el panel localmente
          }
          this.modalIsOpen = false;
        })
        .catch(error => {
          console.error('Error al actualizar el panel:', error);
        });
    },
    deletePanel(panelId) {
<<<<<<< HEAD
      axios.delete(`http://localhost:9000/Tasky/api/Tareas/${panelId}`)
=======
      axios.delete(baseURL+`/Tareas/${panelId}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(() => {
          this.panels = this.panels.filter(p => p.id !== panelId); // Eliminar el panel localmente
        })
        .catch(error => {
          console.error('Error al eliminar el panel:', error);
        });
    }
  }
});
</script>

<style scoped src="../theme/tareas.css"></style>
