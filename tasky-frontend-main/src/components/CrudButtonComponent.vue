<!-- CrudButtonComponent.vue -->
<template>
<<<<<<< HEAD
    <div>
      <ButtonComponent id="find" value="Consultar todo" expand="full" color="warning" nameMethod="findAllRecords" @click="handleClickFind"/>    
      <ButtonComponent id="created" value="Agregar" expand="full" color="warning" nameMethod="createRecord" @click="handleClickCreate"/>
      <ButtonComponent id="updated" value="Modificar" expand="full" color="warning" nameMethod="updateRecord"  @click="handleClickUpdate"/>
      <ButtonComponent id="deleted" value="Eliminar" expand="full" color="warning" nameMethod="deleteRecordPhysical" @click="handleClickDelete" />    
    </div>
  </template>
  
  <script setup lang="ts">
    import ButtonComponent from '@/components/ButtonComponent.vue';
    import { defineEmits } from 'vue';
  
    // Definir los eventos que se emitirán en el componente
    const emit = defineEmits(['createRecord', 'updateRecord', 'deleteRecordPhysical', 'findAllRecords']);
  
    // Método para manejar el clic en el botón de crear
    const handleClickCreate = () => {
      emit('createRecord');
    };
  
    // Método para manejar el clic en el botón de actualizar
    const handleClickUpdate = () => {
      emit('updateRecord');
    };
  
    // Método para manejar el clic en el botón de eliminar
    const handleClickDelete = () => {
      emit('deleteRecordPhysical');
    };
  
    // Método para manejar el clic en el botón de consultar
      const handleClickFind = () => {
        emit('findAllRecords');
    };
  </script>
  
  <style scoped src="../theme/container.css"></style>
=======
  <div class="button-container">
    <ButtonComponent v-if="showFind" id="find" iconName="search" expand="none" color="warning" nameMethod="findAllRecords" @click="handleClickFind" />
    <ButtonComponent v-if="showCreated" id="created" iconName="addCircle" expand="none" color="warning" nameMethod="createRecord" @click="handleClickCreate" />
    <ButtonComponent v-if="showUpdated" id="updated" iconName="pencil" expand="none" color="warning" nameMethod="updateRecord" @click="handleClickUpdate" />
    <ButtonComponent v-if="showDeleted" id="deleted" iconName="trash" expand="none" color="warning" nameMethod="deleteRecordPhysical" @click="handleClickDelete" />
  </div>
</template>

<script setup lang="ts">
import ButtonDosComponent from './ButtonDosComponent.vue';
import { defineProps, defineEmits } from 'vue';

// Definir las propiedades que controlarán la visibilidad de los botones
const props = defineProps({
  showFind: { type: Boolean, default: false },
  showCreated: { type: Boolean, default: true },
  showUpdated: { type: Boolean, default: false },
  showDeleted: { type: Boolean, default: false }
});

// Definir los eventos que se emitirán en el componente
const emit = defineEmits(['createRecord', 'updateRecord', 'deleteRecordPhysical', 'findAllRecords']);

// Métodos para manejar el clic en los botones
const handleClickCreate = () => emit('createRecord');
const handleClickUpdate = () => emit('updateRecord');
const handleClickDelete = () => emit('deleteRecordPhysical');
const handleClickFind = () => emit('findAllRecords');
</script>

<style scoped>
.button-container {
  display: flex;
}

/* Estilos para cada botón */
.button-container ButtonComponent {
  margin-right: 10px; /* Espacio entre botones */
  flex: 1; /* Los botones ocupan el mismo espacio horizontal */
}
</style>
>>>>>>> 3cb7da5 (Agregacion vistas bases de datos)
