<template>
  <ion-page>

    <ion-content>
      <div class="background-container"></div>    
      <BotonatrasComponent href="/home"> </BotonatrasComponent>
      <div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative;">
        <ImagenComponent id="miImagen" imageUrl="/public/logo.png" altText="imagen" class="logo-image" />
      </div>

      <ion-card class="custom-rounded" color="medium">
        <div class="segment">
          <ion-segment>
            <ion-segment-button color="light" value="light">
              <ion-label>Login</ion-label>
            </ion-segment-button>
            <ion-segment-button color="secondary" value="secondary">
              <ion-label>Sign Up</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>
        <p class="parafo">Welcome to Tasky!</p>
        <div class="imput">
          <ImputComponent id="email" name="email" type="email" label="E-mail" placeholder="email@domain.com"
            label-placement="floating" counter="true">
          </ImputComponent>
          <ImputComponent id="Password" name="Password" type="Password" placeholder="Password" label="Password"
            label-placement="floating">
          </ImputComponent>
        </div>
      </ion-card>
      <div class="custom-button-width">
        <ButtonComponent id="login" value="login" fill="solid" color="medium" expand="block" size="large" href="/panel">
        </ButtonComponent>
      </div>
      <div class="centered-content">
        <th class="text">
          <ButtonComponent id="Forgot Password?" value="Forgot Password?" fill="clear" expand="block" size="large"
            class="registro"></ButtonComponent>
        </th>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImputComponent from '@/components/ImputComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';
import BotonatrasComponent from '@/components/BotonatrasComponent.vue';


</script>


<style scoped>
.logo-image {
  width: 200px;
  /* Adjust width as desired */
  height: auto;
  /* Maintain aspect ratio */
  margin: 0 auto;
}

ion-icon {
  font-size: 2em;
  /* Adjust the value for your desired size */
}
</style>
