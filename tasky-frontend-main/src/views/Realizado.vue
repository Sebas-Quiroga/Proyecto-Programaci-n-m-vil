<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <!-- Notas -->
        <ion-card v-for="nota in notas" :key="nota.id" class="custom-rounded">
          <ion-card-content>
          <ion-text>notas</ion-text>
            <ion-item>
              <ion-text>Titulo: {{ nota.titulo }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Contenido: {{ nota.contenido }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Categoria: {{ nota.categoria }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Prioridad: {{ nota.prioridad }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Etiqueta: {{ nota.etiqueta }}</ion-text>
            </ion-item>
            <ion-button @click="changeEventToZeron(nota.id)" fill="clear">
              <ion-icon name="checkmark-circle-sharp" size="large"></ion-icon>
            </ion-button>
          </ion-card-content>
        </ion-card>

        <!-- Tareas -->
        <ion-card v-for="panel in panels" :key="panel.id" class="custom-rounded">
          <ion-card-content>
            <ion-text>Tarea</ion-text>
            <ion-item>
              <ion-text>Nombre: {{ panel.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Fecha de Inicio: {{ panel.ini }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>Fecha de Fin: {{ panel.fin }}</ion-text>
            </ion-item>
            <ion-button color="danger" @click="changeEventToZerot(panel.id)" fill="clear">
              <ion-icon name="close-circle-sharp" size="large"></ion-icon>
            </ion-button>
          </ion-card-content>
        </ion-card>

       
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonItem, IonText, IonButton, IonIcon, IonModal, IonLabel, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

const baseURL = "http://192.168.193.209:9000/Tasky/api";

export default defineComponent({
  components: {
    IonPage, IonContent, IonCard, IonCardContent, IonItem, IonText, IonButton, IonIcon, IonModal, IonLabel, IonInput
  },
  data() {
    return {
      notas: [],
      notaForm: { id: '', titulo: '', contenido: '', categoria: '', prioridad: '', etiqueta: '', usuario: { id: '' } },
      panels: [],
      modalIsOpen: false

    };
  },
  mounted() {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      const emailGuardado = localStorage.getItem('emailUsuario');
      axios.get(baseURL+`/Usuario?email=${emailGuardado}`)
        .then(response => {
          if (response.data.length > 0) {
            const usuario = response.data[0];
            const idUsuario = usuario.id;
            this.notaForm.usuario.id = idUsuario;
            this.mostrarNotas(idUsuario);
            this.mostrarPaneles(idUsuario);
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    mostrarNotas(idUsuario) {
      axios.get(baseURL+`/Notas/vista/notas/${idUsuario}`)
        .then(response => {
          this.notas = response.data.filter(notas => notas.evento === 1);
          console.log('Datos de las notas:', this.notas);
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al obtener los datos de la API.');
        });
    },
    mostrarPaneles(idUsuario) {
      axios.get(baseURL+`/Tareas/vista/${idUsuario}`)
        .then(response => {
          this.panels = response.data.filter(panel => panel.evento === 1);
          console.log('Datos de los paneles filtrados:', this.panels);
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al obtener los datos de la API.');
        });
    },
    changeEventToZerot(panelId) {
      const panel = this.panels.find(p => p.id === panelId);
      if (panel) {
        panel.evento = 1;
        axios.put(baseURL+`/Tareas/${panelId}`, { evento: 0 })
          .then(response => {
            console.log(`Evento del Panel ID ${panelId} actualizado a 0 en la base de datos`);
            window.location.reload();
          })
          .catch(error => {
            console.error('Error al actualizar el evento en la base de datos:', error);
            panel.evento = 0;
            alert('Hubo un problema al actualizar el evento en la base de datos.');
          });
      } else {
        console.error(`Panel con ID ${panelId} no encontrado.`);
      }
    },
    changeEventToZeron(NotaId) {
  const nota = this.notas.find(p => p.id === NotaId);
  if (nota) {
    nota.evento = 1;
    axios.put(baseURL+`/Notas/${NotaId}`, { evento: 0 })
      .then(response => {
        console.log(`Evento del Panel ID ${NotaId} actualizado a 0 en la base de datos`);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al actualizar el evento en la base de datos:', error);
        nota.evento = 0;
        alert('Hubo un problema al actualizar el evento en la base de datos.');
      });
  } else {
    console.error(`Panel con ID ${NotaId} no encontrado.`);
  }
}
    
  }
});
  </script>

<style scoped src="../theme/tareas.css"></style>