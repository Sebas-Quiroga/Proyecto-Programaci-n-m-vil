<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
    <ion-card class="custom-rounded">
        <p class="parrafo">Agregar una tarea!</p>
        <form @submit.prevent="agregarPanel">

          <ion-item>
            <ImputComponent class="texto" id="nombre" name="nombre" label="Nombre de la tarea: " placeholder="Nota" label-placement="floating"
              counter="true" v-model="panelData.name">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent type="date" id="fecha_inicio" name="fecha_inicio" label="Fecha de inicio: "  label-placement="floating"
              counter="true" v-model="panelData.ini">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent type="date" id="fecha_fin" name="fecha_fin" label="Fecha de fin: "  label-placement="floating"
              counter="true" v-model="panelData.fin">
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
          name: '',
          ini: '',
          fin: '',
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
        axios.post('http://localhost:9000/Tasky/api/Tareas/crear', this.panelData)
          .then(response => {
            console.log('Panel guardado exitosamente:', response.data);
            this.panelData = {
              name: '',
              ini: '',
              fin: '',
              usuario: {
                id: '',
              },
            };
            window.location.href = '/tasky/tareas';
          })
          .catch(error => {
            console.error('Hubo un problema al guardar el panel:', error);
            alert('Hubo un problema al guardar el Tarea. Consulta la consola para más detalles.');
          });
      },
    },
  })
  </script>