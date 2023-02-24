import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import '@/commons/prototype';

import { pluginInstall } from '@/commons/globalPlugin';
pluginInstall(app);

import router from '@/routers/router';
app.use(router);

import { PromiseDialog } from 'vue3-promise-dialog';
app.use(PromiseDialog);

import '@/assets/css/flexbox.css';
import '@/assets/css/common.css';
import '@/assets/scss/variable.scss';
import '@/assets/scss/flexbox.scss';

app.mount('#app');
