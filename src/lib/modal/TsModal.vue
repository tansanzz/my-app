<template>
    <div>
        {{ message }}
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
    },
    beforeMount() {
        this.createParent();
        this.setupContainer();
    },
    mounted() {
        this.notify();
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
