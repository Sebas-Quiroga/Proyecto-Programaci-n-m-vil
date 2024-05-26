<template>
  <ion-page>
   
    <ion-content :fullscreen="true">
      <div class="background-container"></div>
      <ion-header collapse="condense" style="display: flex; justify-content: center; align-items: center;"></ion-header>
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative;">
       
           <ImagenComponent id="logo" imageUrl="/resources/logo.png" altText="imagen" class="logo-image-g" />  
      </div>
      <div class="custom-button-width">
        <ButtonComponent id="login" value="login" fill="solid" color="medium" expand="block" size="large" href="/login"></ButtonComponent>
      </div>
      <div class="centered-content" >
        <th class="text">Don’t have an account?<ButtonComponent  id="Sign Up" value="Sign Up" fill="clear"  expand="block" size="large"class="registro" ></ButtonComponent></th>
      </div>
       
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonNavLink } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';


</script>


