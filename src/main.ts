// vue-create-app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// routes
import router from './router'
app.use(router)

//plugins
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// store
import { createPinia } from 'pinia'
app.use(createPinia())

// mount app
app.mount('#app')
