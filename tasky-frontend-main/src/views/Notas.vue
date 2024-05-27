<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <ion-card v-for="nota in notas" :key="nota.id" class="custom-rounded">
          <ion-card-content>
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
<<<<<<< HEAD
  
            <ion-button color="warning" @click="editNota(nota.id)" fill="clear">
              <ion-icon name="create-outline" size="large"></ion-icon>
            </ion-button>

            <ion-button color="danger" @click="deleteNota(nota.id)" fill="clear">
              <ion-icon name="trash" size="large"></ion-icon>
            </ion-button>
            
=======
            <ion-button @click="changeEventToZero(nota.id)" fill="clear">
              <ion-icon name="checkmark-circle" size="large"></ion-icon>
            </ion-button>
            <ion-button @click="editNota(nota.id)"fill="clear">
              <ion-icon name="create-outline" size="large"></ion-icon>
            </ion-button>
            <ion-button @click="deleteNota(nota.id)"fill="clear">
              <ion-icon name="trash" size="large"></ion-icon>
            </ion-button>
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
          </ion-card-content>
        </ion-card>

        <ion-button color="light" size="large" class="ion-float" href="/Tasky/notas/guardar">
          <ion-icon name="add-circle" size="large"></ion-icon>
        </ion-button>

        <!-- Modal para agregar o editar notas -->
        <ion-modal :is-open="modalIsOpen" @didDismiss="modalIsOpen = false" :css-class="['my-custom-modal']">
          <div class="modal-content">
            <div id="data-form">
              <ion-item>
                <ion-label position="stacked">Titulo</ion-label>
                <ion-input v-model="notaForm.titulo"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Contenido</ion-label>
                <ion-input v-model="notaForm.contenido"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Categoria</ion-label>
                <ion-input v-model="notaForm.categoria"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Prioridad</ion-label>
                <ion-input v-model="notaForm.prioridad"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Etiqueta</ion-label>
                <ion-input v-model="notaForm.etiqueta"></ion-input>
              </ion-item>
            </div>
            <div>
              <ion-button @click="saveNota">Guardar</ion-button>
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
      notas: [],
      notaForm: { id: '', titulo: '', contenido: '', categoria: '', prioridad: '', etiqueta: '', usuario: { id: '' } },
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
            this.notaForm.usuario.id = idUsuario;
            this.mostrarNotas(idUsuario);
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    mostrarNotas(idUsuario) {
<<<<<<< HEAD
      axios.get(`http://localhost:9000/Tasky/api/Notas/vista/notas/${idUsuario}`)
=======
      axios.get(baseURL+`/Notas/vista/notas/${idUsuario}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(response => {
          this.notas = response.data.filter(notas => notas.evento === 0);
          console.log('Datos de las notas:', this.notas);
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al obtener los datos de la API.');
        });
    },
    changeEventToZero(NotaId) {
<<<<<<< HEAD
      const nota = this.notas.find(p => p.id === NotaId);
      if (nota) {
        nota.evento = 0;
        axios.put(`http://localhost:9000/Tasky/api/Notas/${NotaId}`, { evento: 1 })
          .then(response => {
            console.log(`Evento del Panel ID ${NotaId} actualizado a 0 en la base de datos`);
            window.location.reload();
          })
          .catch(error => {
            console.error('Error al actualizar el evento en la base de datos:', error);
            nota.evento = 1;
            alert('Hubo un problema al actualizar el evento en la base de datos.');
          });
      } else {
        console.error(`Panel con ID ${NotaId} no encontrado.`);
      }
    },
=======
  const nota = this.notas.find(p => p.id === NotaId);
  if (nota) {
    nota.evento = 0;
    axios.put(baseURL+`/Notas/${NotaId}`, { evento: 1 })
      .then(response => {
        console.log(`Evento del Panel ID ${NotaId} actualizado a 0 en la base de datos`);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al actualizar el evento en la base de datos:', error);
        nota.evento = 1;
        alert('Hubo un problema al actualizar el evento en la base de datos.');
      });
  } else {
    console.error(`Panel con ID ${NotaId} no encontrado.`);
  }
},
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
    openModalAdd() {
      this.notaForm = { id: '', titulo: '', contenido: '', categoria: '', prioridad: '', etiqueta: '', usuario: { id: this.notaForm.usuario.id } };
      this.modalIsOpen = true;
    },
    editNota(notaId) {
      const nota = this.notas.find(n => n.id === notaId);
      if (nota) {
        this.notaForm = { ...nota };
        this.modalIsOpen = true;
      }
    },
    saveNota() {
      if (this.notaForm.id) {
        this.updateNota();
      } else {
        this.createNota();
      }
    },
    updateNota() {
<<<<<<< HEAD
      axios.put(`http://localhost:9000/Tasky/api/Notas/${this.notaForm.id}`, this.notaForm)
=======
      axios.put(baseURL+`/Notas/${this.notaForm.id}`, this.notaForm)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(() => {
          const index = this.notas.findIndex(n => n.id === this.notaForm.id);
          if (index !== -1) {
            this.notas[index] = { ...this.notaForm }; // Actualizar la nota localmente
          }
          this.modalIsOpen = false;
        })
        .catch(error => {
          console.error('Error al actualizar la nota:', error);
        });
    },
    deleteNota(notaId) {
<<<<<<< HEAD
      axios.delete(`http://localhost:9000/Tasky/api/Notas/${notaId}`)
=======
      axios.delete(baseURL+`/Notas/${notaId}`)
>>>>>>> 414a6d9a4a332d0c5aaf5505d5a3fa06ca80e970
        .then(() => {
          this.notas = this.notas.filter(n => n.id !== notaId); // Eliminar la nota localmente
        })
        .catch(error => {
          console.error('Error al eliminar la nota:', error);
        });
    }
  }
});
</script>

<style scoped src="../theme/tareas.css"></style>
