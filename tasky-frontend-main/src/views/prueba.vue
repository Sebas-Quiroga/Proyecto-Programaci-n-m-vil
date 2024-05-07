<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        Login / Registro
                    </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-segment v-model="selectedOption">
                        <ion-segment-button color="light" value="login">
                            <ion-label>Login</ion-label>
                        </ion-segment-button>
                        <ion-segment-button color="secondary" value="registro">
                            <ion-label>Registro</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                    <div v-if="selectedOption === 'login'">
                        <!-- Formulario de Login -->
                        <h2>Login</h2>
                        <ion-item>
                            <ion-label > <ImputComponent id="email" name="email" type="email" label="E-mail" placeholder="email@domain.com"
            label-placement="floating" counter="true">
          </ImputComponent></ion-label>
                            <ion-input v-model="loginUsername"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Contraseña</ion-label>
                            <ion-input type="password" v-model="loginPassword"></ion-input>
                        </ion-item>
                        <!-- Otros elementos del formulario de login -->
                    </div>
                    <div v-else-if="selectedOption === 'registro'">
                        <!-- Formulario de Registro -->
                        <h2>Registro</h2>
                        <ion-item>
                            <ion-label position="floating">Nombre</ion-label>
                            <ion-input v-model="registroNombre"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Usuario</ion-label>
                            <ion-input v-model="registroUsername"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Contraseña</ion-label>
                            <ion-input type="password" v-model="registroPassword"></ion-input>
                        </ion-item>
                        <!-- Otros elementos del formulario de registro -->
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ImputComponent from '@/components/ImputComponent.vue';

export default defineComponent({
    components: {
        IonContent,
        IonPage,
    },
    setup() {
        const selectedOption = ref('login');
        const loginUsername = ref('');
        const loginPassword = ref('');
        const registroNombre = ref('');
        const registroUsername = ref('');
        const registroPassword = ref('');

        return {
            selectedOption,
            loginUsername,
            loginPassword,
            registroNombre,
            registroUsername,
            registroPassword,
        };
    },
});
</script>