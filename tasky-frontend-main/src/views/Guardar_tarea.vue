<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
      <h2>Agregar | Tareal</h2>
      <ion-card class="custom-rounded">
        <form @submit.prevent="agregarPanel">
          <ion-item>
            <ion-label>Nombre:</ion-label>
            <ion-input v-model="panelData.name" type="text" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Fecha de Inicio:</ion-label>
            <ion-input v-model="panelData.ini" type="date" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Fecha de Fin:</ion-label>
            <ion-input v-model="panelData.fin" type="date" required></ion-input>
          </ion-item>
          <ion-input type="hidden" v-model="panelData.usuario_id" :value="this.idUsuario" />
          <ButtonComponent id="Crear" value="crear" fill="solid" color="warning" expand="block" size="large"
            class="custom-button-width" @click="guardarPanel">
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
        axios.post('http://localhost:9000/Tasky/api/Panel/crear', this.panelData)
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
            alert('Panel guardado exitosamente.');
          })
          .catch(error => {
            console.error('Hubo un problema al guardar el panel:', error);
            alert('Hubo un problema al guardar el panel. Consulta la consola para más detalles.');
          });
      },
    },
  })
  </script>