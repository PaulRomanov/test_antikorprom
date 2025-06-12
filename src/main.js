import { createApp } from 'vue';
import App from './App.vue';
import NTTCard from './components/NTTCard.vue';
import NTTTable from './components/NTTTable.vue';
import NTTNotes from './components/NTTNotes.vue';

const app = createApp(App);
app.component('NTTCard', NTTCard);
app.component('NTTTable', NTTTable);
app.component('NTTNotes', NTTNotes);

app.mount('#app');