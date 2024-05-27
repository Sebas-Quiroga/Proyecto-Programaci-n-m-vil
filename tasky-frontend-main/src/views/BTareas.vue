<template>
  <ion-page @ionViewDidEnter="findAllRecords">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Base de datos | Tareas</ion-title>
      </ion-toolbar>

      <ion-button color="warning" href="/busuarios">
                  <ion-icon :icon="IonIcons.personCircleOutline"></ion-icon>
      </ion-button>
      <ion-button color="tertiary" href="/btareas">
                  <ion-icon :icon="IonIcons.alarmOutline"></ion-icon>
      </ion-button>
      <ion-button color="danger" href="/bnotas">
                  <ion-icon :icon="IonIcons.bookOutline"></ion-icon>
      </ion-button>

    </ion-header>
    <ion-content fullscreen>
      <div id="container">
       

        <!-- Modal para agregar o editar registros -->
        <ion-modal :is-open="modalIsOpen" @didDismiss="modalIsOpen = false" :css-class="['my-custom-modal']">
          <div class="modal-content">
            <div id="data-form">
              <InputComponent v-model="nombre" id="nombre" name="nombre" label="Nombre: " />
              <InputComponent v-model="apellido" id="apellido" name="apellido" label="Apellido: " />
              <InputComponent v-model="email" id="email" name="email" label="Email: " />
              <InputComponent v-model="password" type="password" id="password" name="password" label="Contraseña: " />
            </div>
            <div>
              <!-- Botones de CRUD dentro del modal -->
              <CrudButtonComponent :showFind="showFind" :showCreated="showCreated" :showUpdated="showUpdated"
                :showDeleted="showDeleted" @findAllRecords="findAllRecords" @createRecord="createRecord"
                @updateRecord="updateRecord" @deleteRecordPhysical="deleteRecordPhysical" />
            </div>
          </div>
        </ion-modal>

        <!-- Mostrar datos -->
        <div class="table-container">
          <ion-list>
            <!-- Iterar sobre items para mostrar los datos en tarjetas -->
            <ion-card v-for="(item, index) in items" :key="index" class="card-width">
              <ion-card-content>
                <ion-item>
                  <ion-label>Id: </ion-label>
                  <ion-label>{{ item.id }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Nombre: </ion-label>
                  <ion-label>{{ item.name }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Fecha Inicio: </ion-label>
                  <ion-label>{{ item.ini }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Fecha Fin: </ion-label>
                  <ion-label>{{ item.fin }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Usuario: </ion-label>
                  <ion-label>{{ item.usuario }}</ion-label>
                </ion-item>
              </ion-card-content>
              <ion-item>
                <!-- Botones de editar y eliminar -->
                <ion-button color="warning">
                  <ion-icon :icon="IonIcons.createOutline"></ion-icon>
                </ion-button>
                <!--
                <ion-button color="warning" @click="findById(item.id)">
                  <ion-icon :icon="IonIcons.createOutline"></ion-icon>
                </ion-button>
                -->
                <ion-button color="danger" @click="deleteRecordPhysical(item.id)">
                  <ion-icon :icon="IonIcons.trash"></ion-icon>
                </ion-button>


                
              </ion-item>
            </ion-card>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonModal } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import * as IonIcons from 'ionicons/icons';
import axios from 'axios';

// Rutas de la API
const baseURL = 'https://x71f6bvf-9000.use2.devtunnels.ms/Tasky/api/Tareas/vista'; 
const modalIsOpen = ref(false);

const items = ref<Array<ItemType>>([]);
const id = ref('');
const name = ref('');
const ini = ref('');
const fin = ref('');
const usuario = ref('null');

const showFind = ref<boolean>(false);
const showCreated = ref<boolean>(true);
const showUpdated = ref<boolean>(false);
const showDeleted = ref<boolean>(false);

// Tipos
interface ItemType {
  id: string;
  name: string;
  ini: string;
  fin: string;
  usuario: string;
}

onMounted(() => {
  findAllRecords();
});

// Métodos
async function findAllRecords() {
  try {
    const response = await axios.get(baseURL);
    items.value = response.data;
  } catch (error) {
    console.error('Error al obtener todos los registros:', error);
    throw error;
  }
}

//Cargar los datos para edición
async function findById(recordId: string) {
  try {
    await openModalAdd();
    const response = await axios.get(`${baseURL}/${recordId}`);
    const data = response.data;

    id.value = data.id;
    name.value = data.name;
    ini.value = data.ini;
    fin.value = data.fin;
    usuario: { id: usuario.value }


    // Controlar la visibilidad de los botones
    showCreated.value = false;
    showUpdated.value = true;

  } catch (error) {
    console.error('Error al encontrar el registro por ID:', error);
    throw error;
  }
}

async function createRecord() {
  const data = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password: password.value
  };

  try {
    const response = await axios.post(baseURL, data);
    console.log('Registro creado exitosamente:', response.data);
    await findAllRecords();
    await clearData();

    await closeModal();
  } catch (error) {
    console.error('Error al crear el registro:', error);

  }
}

async function updateRecord() {
  const data = {
    id: id.value,
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password: password.value
  };

  try {
    const response = await axios.put(`${baseURL}/${data.id}`, data);
    console.log('Registro actualizado exitosamente:', response.data, id);

    await findAllRecords();
    await clearData();

    showCreated.value = true;
    showUpdated.value = false;

    await closeModal();

    return response.data;
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    throw error;
  }
}

async function deleteRecordPhysical(recordId: string) {
  try {
    const response = await axios.delete(`${baseURL}/${recordId}`);
    await findAllRecords();
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el registro físico:', error);
    throw error;
  }
}

async function clearData() {
  nombre.value = '';
  apellido.value = '';
  email.value = '';
  password.value = '';
}

const openModalAdd = () => {
  modalIsOpen.value = true;
};

const closeModal = () => {
  modalIsOpen.value = false;
};
</script>

<style scoped src="../theme/container.css"></style>
