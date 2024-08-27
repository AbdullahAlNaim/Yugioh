import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/card.vue'
import Searcher from './components/Searcher.vue'

const app = createApp(App)

app.component('card', Card);
app.component('searcher', Searcher);

app.mount('#app');
