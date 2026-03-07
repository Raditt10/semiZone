// Mengimport Vue 3 core dan dependencies
import { createApp } from 'vue'
import './style.css' // Global styles
import App from './App.vue' // Root component
import router from './router' // Vue Router configuration

// Inisialisasi aplikasi Vue
const app = createApp(App)

// Konfigurasi router
app.use(router)

// Mount aplikasi ke elemen dengan id 'app' di index.html
app.mount('#app')
