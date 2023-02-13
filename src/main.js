import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { pluginInstall } from "@/commons/globalPlugin";
pluginInstall(app);

import router from "@/routers/router";
app.use(router);

import { PromiseDialog } from "vue3-promise-dialog";
app.use(PromiseDialog);

app.mount('#app')
