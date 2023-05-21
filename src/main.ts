import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dependencies from './plugins/dependencies'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(dependencies)

app.mount('#app')
