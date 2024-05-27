<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
      <ion-card class="custom-rounded">
        <p class="parrafo">Agregar una nota!</p>
        <form @submit.prevent="agregarPanel">
          <ion-item>
            <ImputComponent class="texto" id="titulo" name="titulo" label="Titulo: " placeholder="Describe el contenido de la nota" label-placement="floating" counter="true" v-model="panelData.titulo">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="contenido" name="contenido" label="Descripción: " placeholder="Información que se desea recordar o registrar." label-placement="floating" counter="true" v-model="panelData.contenido">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ion-label>Categoría</ion-label>
            <ion-select v-model="panelData.categoria" placeholder="Categoria de la tarea" label-placement="floating">
              <ion-select-option value="Trabajo">Trabajo</ion-select-option>
              <ion-select-option value="Estudios">Estudios</ion-select-option>
              <ion-select-option value="Vida personal">Vida personal</ion-select-option>
              <ion-select-option value="Recuerdos">Recuerdos</ion-select-option>
              <ion-select-option value="Compras">Compras</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>Etiqueta</ion-label>
            <ion-select v-model="panelData.etiqueta" placeholder="Etiqueta de la tarea" label-placement="floating">
              <ion-select-option value="Pendiente">Pendiente</ion-select-option>
              <ion-select-option value="En Progreso">En Progreso</ion-select-option>
              <ion-select-option value="Completado">Completado</ion-select-option>
              <ion-select-option value="Cancelado">Cancelado</ion-select-option>
              <ion-select-option value="Pospuesto">Pospuesto</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>Prioridad</ion-label>
            <ion-select v-model="panelData.prioridad" placeholder="Prioridad de la tarea" label-placement="floating">
              <ion-select-option value="Muy importante">Muy importante</ion-select-option>
              <ion-select-option value="Baja importancia">Baja importancia</ion-select-option>
              <ion-select-option value="Sin importancia">Sin importancia</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-input type="hidden" v-model="panelData.usuario_id" :value="this.idUsuario" />

          <ButtonComponent id="Crear" value="crear" fill="solid" color="warning" expand="block" size="large" class="custom-button-width" @click="guardarPanel">
          </ButtonComponent>
        </form>
        <br>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImputComponent from '@/components/ImputComponent.vue';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    ButtonComponent,
    ImputComponent
  },
  data() {
    return {
      panelData: {
        titulo: '',
        contenido: '',
        categoria: '',
        prioridad: '',
        etiqueta: '',
        usuario: {
          id: '',
        },
      },
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
            this.panelData.usuario.id = usuario.id;
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    guardarPanel() {
      axios.post('http://localhost:9000/Tasky/api/Notas/guardar', this.panelData)
        .then(response => {
          console.log('Panel guardado exitosamente:', response.data);
          this.panelData = {
            titulo: '',
            contenido: '',
            categoria: '',
            prioridad: '',
            etiqueta: '',
            usuario: {
              id: '',
            },
          };
          window.location.href = '/tasky/notas';
        })
        .catch(error => {
          console.error('Hubo un problema al guardar el panel:', error);
          alert('Hubo un problema al guardar el panel. Consulta la consola para más detalles.');
        });
    },
  },
});
</script>

<style scoped src="../theme/variables.css"></style>
