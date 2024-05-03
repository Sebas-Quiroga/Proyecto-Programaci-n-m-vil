<template>
  <ion-page>
    <div class="background-container"></div>  
    <ion-tabs :style="{ '--background': 'white' }"> <ion-header collapse="condense"
                  style="height: 80px; display: flex; justify-content: center; align-items: center; background: white;"> <ion-toolbar>
          <div style="display: flex; align-items: center;">
            <ion-icon name="person-circle-outline" size="large"></ion-icon>
            <div style="display: flex; flex-direction: column; align-items: start;">
              <span style="margin-left: 10px;">{{ "Usuario Pepito Perez Fernandez" }}</span>
              <span style="margin-left: 10px;">{{ "usuario@corhuila.edu.co" }}</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: start;">
              <ion-button color="light" fill="clear" size="large">
                <ion-icon name="power" size="large"></ion-icon>
          </ion-button>
        </div>
          </div>
        </ion-toolbar>
      </ion-header>
      
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" :style="{ '--background': 'white' }">
        <ion-tab-button tab="Buscar" href="/tabs/CLIENTE">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="checkmark-circle" size="large" ></ion-icon>
          </ion-button>
        </ion-tab-button>
         <ion-tab-button tab="Buscar" href="/tabs/CLIENTE">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="search-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>

        <ion-tab-button tab="Pendientes" href="/tabs/EMPLEADO">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="person-circle"  size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>

        <ion-tab-button tab="agregar" href="/tabs/ESTUDIANTE">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-button color="light" fill="clear" size="large">
            <ion-icon name="add-circle" size="large"></ion-icon>
          </ion-button>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
