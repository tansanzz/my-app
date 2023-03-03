<template>
    <component :is="componentName" ref="component" :params="params" />
</template>

<script>
import Popup1 from '@/views/Popup1.vue';
export default {
    components: { Popup1 },
    props: {
        message: String,
        componentName: String,
        params: Object,
    },
    created() {},
    beforeMount() {
        this.createParent();
        this.setupContainer();
    },
    mounted() {
        console.log(this.componentFile);
        this.notify();
        if (this.$refs.component && typeof this.$refs.component.loadData === 'function') this.$refs.component.loadData(this.params);
    },
    data() {
        return {
            parent: null,
        };
    },
    methods: {
        createParent() {
            this.parent = document.getElementById('ts-modal');
            if (!this.parent) {
                this.parent = document.createElement('div');
                this.parent.id = 'ts-modal';
                this.parent.className = 'ts-modal';
            }
        },
        setupContainer() {
            const container = document.body;
            container.appendChild(this.parent);
        },
        notify() {
            this.parent.insertAdjacentElement('afterbegin', this.$el);
        },
    },
};
</script>

<style></style>
