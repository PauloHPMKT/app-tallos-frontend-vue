import { createApp } from 'vue'

//importing fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/sass/main.scss'
import './stores'
import store from './stores'

const app = createApp(App)

library.add( fas, far )

app.config.globalProperties.$store = store;
app.provide('$store', store)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
