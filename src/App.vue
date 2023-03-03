<template>
    <div id="app">
        <router-view />
        <dialog-wrapper />
        <button @click="$toast.success('message')">show message</button>
        <button @click="showModal">show modal</button>
    </div>
</template>

<script>
import { DialogWrapper } from 'vue3-promise-dialog';
export default {
    name: 'App',
    components: {
        DialogWrapper,
    },
    created() {
        let me = this;
    },
    methods: {
        showModal() {
            this.$modal.show('Popup1', { message: 'Hello popup 1' });
        },
    },
};
</script>

<style></style>
