<template>
  <ion-page>

    <div class="background-container"></div>

    <ion-content>

      <ion-card class="custom-rounded">


        <p class="parrafo">Agregar una nota!</p>
        <form @submit.prevent="agregarPanel">

          <ion-item>
            <ImputComponent class="texto" id="titulo" name="titulo" label="Titulo: " placeholder="Describe el contenido de la nota" label-placement="floating"
              counter="true" v-model="panelData.titulo">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="contenido" name="contenido" label="Descripción: " placeholder="Información que se desea recordar o registrar." label-placement="floating"
              counter="true" v-model="panelData.contenido">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="categoria" name="categoria" label="Categoria: " placeholder="Categoria de la tarea" label-placement="floating"
              counter="true" v-model="panelData.categoria">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="etiqueta" name="etiqueta" label="Etiqueta " placeholder="Etiqueta de la tarea" label-placement="floating"
              counter="true" v-model="panelData.etiqueta">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="prioridad" name="prioridad" label="Prioridad" placeholder="Prioridad de la tarea:" label-placement="floating"
              counter="true" v-model="panelData.prioridad">
            </ImputComponent>
          </ion-item>
          <ion-input type="hidden" v-model="panelData.usuario_id" :value="this.idUsuario" />

          <ButtonComponent id="Crear" value="crear" fill="solid" color="warning" expand="block" size="large"
            class="custom-button-width" @click="guardarPanel">
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
  import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
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
  })
  </script>

<style scoped src="../theme/variables.css"></style>