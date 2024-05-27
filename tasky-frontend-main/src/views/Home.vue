<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="background-container"></div>
      <ion-header collapse="condense" style="display: flex; justify-content: center; align-items: center;"></ion-header>
      <div class="center-content">
        <ImagenComponent id="logo" imageUrl="/resources/logo.png" altText="imagen" class="logo-image-g" />
      </div>
      
      <div class="footer-content">
        <div class="custom-button-container">
          <ButtonComponent 
            class="custom-button" id="login" value="login" fill="solid" expand="block" color="medium" size="large" href="/login"
          ></ButtonComponent>
        </div>
        
        <div class="centered-content">
          <p class="text"> Don’t have an account?
            <ButtonComponent class="sign-up" id="Sign Up" value="Sign Up" fill="clear" expand="block" size="large" href="/login"></ButtonComponent>
          </p>
          
        </div>
        <p>{{ apiStatus }}</p>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';

const apiStatus = ref<string>('Checking API status...');
  const baseURL = "http://192.168.193.209:9000/Tasky/api";
const checkApiStatus = async () => {
  try {
    const response = await axios.get(baseURL+'/Usuario');
    if (response.status === 200) {
      apiStatus.value = 'La API se está ejecutando';
    } else {
      apiStatus.value = 'La API no responde correctamente';
    }
  } catch (error) {
    apiStatus.value = 'La API está caída';
  }
};

onMounted(() => {
  checkApiStatus();
});
</script>

<style scoped src="../theme/home.css"></style>
