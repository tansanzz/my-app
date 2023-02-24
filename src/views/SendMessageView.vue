<template>
    <ts-input />
    <ts-button type="primary" text="Send" />
</template>

<script>
import TsInput from '@/components/input/TsInput';
import TsButton from '@/components/button/TsButton';
import messageApi from '@/apis/messageApi.js';
export default {
    components: { TsInput, TsButton },
    created() {
        messageApi.getUser();
    },
};
</script>

<style></style>
