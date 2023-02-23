<template>
    <div :class="['ts-toast-item', type]">
        <div>
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'default',
        },
        delay: {
            type: Number,
            default: 2000,
        },
    },
    computed: {},
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
            this.parent = document.getElementById('ts-toast');
            if (!this.parent) {
                this.parent = document.createElement('div');
                this.parent.id = 'ts-toast';
                this.parent.className = 'ts-toast';
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

<style lang="scss">
.ts-toast {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20px;
    right: 20px;
    gap: 8px;
}

.ts-toast-item {
    min-height: 32px;
    line-height: 32px;
    width: 120px;
    padding: 0 16px;

    &.success {
        background-color: greenyellow;
        color: black;
    }

    &.error {
        background-color: greenyellow;
        color: black;
    }

    &.info {
        background-color: greenyellow;
        color: black;
    }

    &.warning {
        background-color: greenyellow;
        color: black;
    }
}
</style>
