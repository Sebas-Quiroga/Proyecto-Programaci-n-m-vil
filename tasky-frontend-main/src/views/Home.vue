<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="background-container"></div>
      <ion-header collapse="condense" style="display: flex; justify-content: center; align-items: center;"></ion-header>
      <div class="center-content">
        <ImagenComponent id="logo" imageUrl="/public/logo.png" altText="imagen" class="logo-image-g" />
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
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonNavLink } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';


</script>
<style scoped src="../theme/home.css"></style>
