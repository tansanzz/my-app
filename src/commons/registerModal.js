import { defineAsyncComponent } from "vue";

const Popup1 = defineAsyncComponent(() => import("@/views/Popup1.vue"));

export function registerModal(app) {
    app.component('Popup1', Popup1)
}
