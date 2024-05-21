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
          <ion-input type="hidden" v-model="nuevoPanel.usuario_id" :value="this.idUsuario" />
          <ButtonComponent id="Crear" value="crear" fill="solid" color="warning" expand="block" size="large"
            class="custom-button-width" @click="agregarPanel">
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
      nuevoPanel: {
        name: '',
        ini: '',
        fin: '',
        evento: 0,
        usuario_id: '', // Valor predeterminado del evento es 0
      },
      idUsuario: ''
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
            this.idUsuario = usuario.id;
            console.log('El ID del usuario que vas a usar es:', this.idUsuario);
            alert(`El ID del usuario que vas a usar es: ${this.idUsuario}`);
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    agregarPanel() {
      axios.post('http://localhost:9000/Tasky/api/Panel/crear', this.nuevoPanel)
        .then(response => {
          console.log('Nuevo Panel creado:', response.data);
          this.nuevoPanel = {
            name: '',
            ini: '',
            fin: '',
            evento: 0,
            usuario_id: this.idUsuario,
          };
          window.location.href = '/Tasky/panel';
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al crear el nuevo panel.');
        });
    }
  }
});
</script>