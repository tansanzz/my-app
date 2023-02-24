<template>
    <div class="menu-items flex-column-center gap-4">
        <div>REWALL</div>
        <div class="flex-column gap-2">
            <a
                v-for="(item, index) in menuItems"
                :class="['menu-item flex-all-center', { active: item.path === $route.path }]"
                :key="index"
                :href="item.path"
                @click="clickMenu(item, index)"
            >
                <div>{{ item.text }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        menuItems() {
            return this.getMenuItems();
        },
    },
    methods: {
        clickMenu(item, index) {
            let me = this;
            me.$router.push(item.path);
        },
        getMenuItems() {
            let menuItems = [
                {
                    path: '/home',
                    text: 'Home',
                },
                {
                    path: '/biography',
                    text: 'Biography',
                },
                {
                    path: '/portfolio',
                    text: 'Portfolio',
                },
                {
                    path: '/send-message',
                    text: 'Send me message',
                },
                {
                    path: '/new-and-tips',
                    text: 'News & Tips',
                },
                {
                    path: '/contact',
                    text: 'Contact',
                },
            ];
            return menuItems;
        },
    },
};
</script>

<style lang="scss">
.menu-items {
    width: 240px;
    border-right: 1px solid black;

    .menu-item {
        min-width: 80px;
        height: 40px;
        max-width: 200px;
        border-radius: 4px;
        padding: 0 16px;

        &:hover {
            background-color: #ffcc0f;
        }

        &.active {
            background-color: #ffcc0f;
        }
    }
}
</style>
