<template>
  <ion-page>
    <div class="background-container"></div>
    <ion-content>
      <h2>Agregar Nuevo Panel</h2>
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
        <ion-button type="submit">Agregar</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>
<script>
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
    IonButton
  },
  data() {
    return {
      nuevoPanel: {
        name: '',
        ini: '',
        fin: '',
        evento: 0, // Valor predeterminado del evento es 0
        usuario: idUsuario // Campo para el id_usuario
      }
    };
  },
  mounted() {
    this.consultarUsuario();
  },
  methods: {
    agregarPanel() {
  const usuarioId = localStorage.getItem('idUsuario');
  this.nuevoPanel.usuario_id = usuarioId; // Asignar el valor de usuarioId a usuario_id
  fetch('http://localhost:9000/Tasky/api/Panel/crear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.nuevoPanel)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo crear el nuevo panel.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Nuevo Panel creado:', data);
      this.nuevoPanel = {
        name: '',
        ini: '',
        fin: '',
        evento: 0, // Restablecer el valor del evento a 0 después de crear el panel
        usuario_id: usuarioId // Restablecer el valor del usuario_id a null después de crear el panel
      };
    })
    .catch(error => {
      console.error(error);
      alert('Hubo un problema al crear el nuevo panel.');
    });
},
    consultarUsuario() {
      const emailGuardado = localStorage.getItem('emailUsuario');
      axios.get(`http://localhost:9000/Tasky/api/Usuario?email=${emailGuardado}`)
        .then(response => {
          if (response.data.length > 0) {
            const usuario = response.data[0];
            const idUsuario = usuario.id;
            this.nuevoPanel.usuario = idUsuario; // Asignar el idUsuario al campo "usuario" de nuevoPanel
          } else {
            console.error('Usuario no encontrado');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
});
</script>