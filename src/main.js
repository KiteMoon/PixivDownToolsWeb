import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import axios from 'axios'
// import './plugins/axios'
// import '@icon-park/vue/styles/index.css';
const app = createApp(App)
// import {install} from '@icon-park/vue-next/es/all';
installElementPlus(app)
app.use(router).mount('#app')
app.config.globalProperties.$http = axios

// app.use(VueAxios,axios);
