<template>
  <ion-page @ionViewDidEnter="findAllRecords">
    <ion-content fullscreen >    
      <ion-list class="" >
        <ion-card v-for="(item, index) in items" :key="index" class="card-width">
          <ion-card-content>
            <ion-item>
              <ion-label>Nombre: </ion-label>
              <ion-label>{{ item.name_of_task }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>fecha inicial: </ion-label>
              <ion-label>{{ item.fecha_ini }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Fecha fin </ion-label>
              <ion-label>{{ item.fecha_fin }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Realizado: </ion-label>
              <ion-label>{{ item.evento }}</ion-label>
            </ion-item>
           
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import * as IonIcons from 'ionicons/icons';

const baseURL = 'http://localhost:9000/Tasky/api/Panel ';
const items = ref<Array<ItemType>>([]);

// Tipos
interface ItemType {
  id: string;
  iduser: string;
  name_of_task: string;
  fecha_ini: string;
  fecha_fin: string;
  evento: string;
}

onMounted(findAllRecords);

async function findAllRecords() {
  try {
    const response = await axios.get(baseURL);
    items.value = response.data;
    
  } catch (error) {
    console.error('Error al obtener todos los registros:', error);
    alert('Error al obtener todos los registros:')

  }
}

const openModalAdd = () => {
  // Lógica para abrir el modal de agregar
};
</script>

<style scoped>
.add-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
