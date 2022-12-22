import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)

// import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

// app.mount('#app')
