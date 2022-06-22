import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

import { store } from '@/store/index';

const app = createApp(App)
app.use(store)
app.mount('#app')

