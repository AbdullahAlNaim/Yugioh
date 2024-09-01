import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/card.vue'
import Searcher from './components/Searcher.vue'
import CardResult from './components/cardResult.vue'

const app = createApp(App)

app.component('card', Card);
app.component('searcher', Searcher);
app.component('card-result', CardResult);

app.mount('#app');
