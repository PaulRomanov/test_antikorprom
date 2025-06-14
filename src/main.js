import { createApp } from 'vue';
import App from './App.vue';
import NTTCard from './components/NTTCard.vue';
import NTTTable from './components/NTTTable.vue';
import NTTNotes from './components/NTTNotes.vue';

const vueApp = createApp(App);

vueApp.component('NTTCard', NTTCard);
vueApp.component('NTTTable', NTTTable);
vueApp.component('NTTNotes', NTTNotes);

vueApp.mount('#app');