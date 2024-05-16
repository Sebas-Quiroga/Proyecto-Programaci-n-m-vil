<template>
  <ion-page>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense" style="display: flex; justify-content: center; align-items: center;">
        <ion-toolbar>
          <ion-title size="large">ESTUDIANTE</ion-title>
        </ion-toolbar>
      </ion-header>

      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; ">
        <ImagenComponent id="miImagen" imageUrl="/src/theme/imgen.png" altText="imagen" />
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 72vh;">
        <div class="borde">
          <DBPersonaComponen />
        </div>
        <ButtonComponent id="guardar" value="Guardar" fill="outline" color="tertiary"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ImagenComponent from '@/components/ImagenComponent.vue';
import DBPersonaComponen from '@/components/DBPersonaComponen.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>
