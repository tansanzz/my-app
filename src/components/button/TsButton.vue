<template>
    <button :class="['ts-button', type]" v-html="text"></button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Button',
        },
        type: {
            type: String,
        },
    },
};
</script>

<style lang="scss">
.ts-button {
    height: 32px;
    min-width: 80px;
    padding: 0 16px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    &.primary {
        background-color: #ffcc0f;
    }
}
</style>
