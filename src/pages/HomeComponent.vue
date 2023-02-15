<template>
    <layout>
        <template #menuLeft>
            <div>Home</div>
        </template>
    </layout>
</template>

<script>
import Layout from '@/layout/Layout';
export default {
    components: { Layout },
    created() {},
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style></style>
