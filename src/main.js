import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
// import '@icon-park/vue/styles/index.css';
const app = createApp(App)
// import {install} from '@icon-park/vue-next/es/all';
installElementPlus(app)

app.use(router).mount('#app')
