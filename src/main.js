import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from "@/routers/router";
app.use(router);

app.mount('#app')
