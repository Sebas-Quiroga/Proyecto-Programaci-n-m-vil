<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Consumir API de Panel en Vue-Ionic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="panelContainer"></div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'PanelPage',
  mounted() {
    const panelContainer = document.getElementById('panelContainer');

    function mostrarPaneles(idUsuario) {
      fetch(`http://localhost:9000/Tasky/api/Panel/vista/${idUsuario}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudieron obtener los datos de la API.');
          }
          return response.json();
        })
        .then(data => {
          panelContainer.innerHTML = '';
          data.forEach(panel => {
            const card = document.createElement('ion-card');

            const cardContent = document.createElement('ion-card-content');

            const title = document.createElement('ion-card-title');
            title.textContent = `Panel ID: ${panel.id}`;

            const name = document.createElement('p');
            name.textContent = `Nombre: ${panel.name}`;

            const ini = document.createElement('p');
            ini.textContent = `Fecha de Inicio: ${panel.ini}`;

            const fin = document.createElement('p');
            fin.textContent = `Fecha de Fin: ${panel.fin}`;

            const evento = document.createElement('p');
            evento.textContent = `Evento: ${panel.evento}`;

            cardContent.appendChild(title);
            cardContent.appendChild(name);
            cardContent.appendChild(ini);
            cardContent.appendChild(fin);
            cardContent.appendChild(evento);

            card.appendChild(cardContent);

            panelContainer.appendChild(card);

            console.log('Datos del Panel:', panel);
          });
        })
        .catch(error => {
          console.error(error);
          alert('Hubo un problema al obtener los datos de la API.');
        });
    }

    const idUsuario = prompt('Por favor, ingresa tu ID de usuario:');
    if (idUsuario) {
      mostrarPaneles(idUsuario);
    } else {
      alert('Debes ingresar un ID de usuario para ver los paneles.');
    }
  }
}
</script>