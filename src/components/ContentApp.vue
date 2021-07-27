<template>
    <div class="router-view">
        <router-view v-slot="{ Component }">
            <transition name="fade"
                        mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "ContentApp",
        data(){
            return {
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease-out;
    }
</style>
