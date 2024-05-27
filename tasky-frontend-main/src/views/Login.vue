<template>
  <ion-page>
    <ion-content>

      <!-- Background y boton hacia atras -->
      <div class="background-container"></div>
      <BotonatrasComponent href="/home"> </BotonatrasComponent>


      <!-- Logo -->
      <div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative;">
        <ImagenComponent id="miImagen" imageUrl="/resources/logo_log.png" altText="imagen" class="logo-image" />
      </div>


      <ion-card class="custom-rounded" color="">
        <div class="segment">
          <ion-segment v-model="selectedOption">

            <ion-segment-button color="light" value="login">
              <ion-label>Login</ion-label>
            </ion-segment-button>

            <ion-segment-button color="secondary" value="registro">
              <ion-label>Sign Up</ion-label>
            </ion-segment-button>

          </ion-segment>
        </div>

        <p class="parrafo">Welcome to Tasky!</p>


        <div v-if="selectedOption === 'login'" class="imput">

          <ion-item>
            <ImputComponent class="texto" id="email" name="email" type="email" label="E-mail:" placeholder="email@domain.com"
              label-placement="floating" counter="true" v-model="email">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="Password" name="Password" type="password" placeholder="Password" label="Password:"
              label-placement="floating" v-model="password">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ButtonComponent id="login" value="login" fill="solid" color="medium" expand="block" size="large" class="custom-button-width"
              @click="validarCredenciales">
            </ButtonComponent>
          </ion-item>

        </div>
        <div v-else-if="selectedOption === 'registro'" class="imput">

          <ion-item>
            <ImputComponent class="texto" id="nombre" name="nombre" label="Nombre: " placeholder="Nombres" label-placement="floating"
              counter="true" v-model="nombre">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="apellido" name="apellido" label="Apellido: " placeholder="Apellidos" label-placement="floating"
              counter="true" v-model="apellido">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="email" name="email" type="email" label="E-mail: " placeholder="email@domain.com"
              label-placement="floating" counter="true" v-model="email">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ImputComponent class="texto" id="Password" name="Password" type="password" placeholder="Password" label="Password: "
              label-placement="floating" v-model="password">
            </ImputComponent>
          </ion-item>

          <ion-item>
            <ButtonComponent id="registrar" value="registrar" fill="solid" color="medium" expand="block" size="large" class="custom-button-width"
              @click="Registrar">
            </ButtonComponent>

          </ion-item>
        </div>
      </ion-card>
      
      <div class="custom-button-width">
        
      </div>
      <div class="centered-content">
        <th class="text">
          <ButtonComponent class="sign-up" id="Forgot Password?" value="Forgot Password?" fill="clear" expand="block" size="large">
          </ButtonComponent>
        </th>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonSegment, IonSegmentButton, IonItem, IonLabel, IonInput } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';
import ImputComponent from '@/components/ImputComponent.vue';
import BotonatrasComponent from '@/components/BotonatrasComponent.vue';
import axios from 'axios';
import { ref } from 'vue';

const baseURL = "https://x71f6bvf-9000.use2.devtunnels.ms/Tasky/api";

const selectedOption = ref('login');
const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');

const validarCredenciales = async () => {
  try {
    const response = await axios.get(baseURL+`/Usuario/validar/${email.value}/${password.value}`);

    if (response.data) {
      window.location.href = '/Tasky/Tareas';
    } else {
      alert('Usuario o contraseña incorrecto');
    }
  } catch (error) {
    console.error(error);
    alert('Error al validar credenciales');
  }
}

const Registrar = async () => {
  try {
    const response = await axios.post(baseURL+'/Usuario/registro', {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: password.value
    });

    if (response.data) {
      alert('Usuario registrado exitosamente');
    } else {
      alert('Error al registrar el usuario');
    }
  } catch (error) {
    console.error(error);
    alert('Error al registrar el usuario');
  }
}
</script>

<style scoped>
.logo-image {
  width: 200px;
  height: auto;
  margin: 0 auto;
}

ion-icon {
  font-size: 2em;
}
</style>

<style scoped src="../theme/login.css"></style>
<style scoped src="../theme/home.css"></style>