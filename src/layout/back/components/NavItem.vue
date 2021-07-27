<template>
    <li class="nav-item"
        @click="getItem">
        <a class="nav-link"
           :class="{'active': item.id == selected}"
           href="javascript:void(0)">
            <i :class="item.icon"></i>
            <span class="nav-link-text">{{item.title}}</span>
        </a>
    </li>
</template>

<script>
    export default {
        name: "NavItem",
        props:{
            item: {
                type: Object
            },
            selected:{
                type: Number
            }
        },
        methods:{
            getItem(){
                this.$emit('goTo',this.item)
            }
        }
    }
</script>

<style scoped>

</style>
