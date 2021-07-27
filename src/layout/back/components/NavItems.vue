<template>
    <ul class="navbar-nav">
        <nav-item v-for="(item,index) in items"
                  :item="item"
                  :selected="selected"
                  @goTo="goTo($event)"
                  :key="index"/>
    </ul>
</template>

<script>
    import NavItem from "./NavItem";
    export default {
        name: "NavItems",
        components: {NavItem},
        data: () => ({
            selected: 1,
            items: [
                {id: 1, icon: 'ni ni-tv-2 text-primary', title: 'Dashboard', path: '/back/dashboard'},
                {id: 2, icon: 'ni ni-planet text-orange', title: 'Icons', path: '/back/icons'},
                {id: 3, icon: 'ni ni-pin-3 text-primary', title: 'Google', path: '/back/google'},
                {id: 4, icon: 'ni ni-single-02 text-yellow', title: 'Profile', path: '/back/profile'},
                {id: 5, icon: 'ni ni-bullet-list-67 text-default', title: 'Tables', path: '/back/tables'},
                {id: 6, icon: 'ni ni-key-25 text-info', title: 'Login', path: '/back/login'},
                {id: 7, icon: 'ni ni-circle-08 text-pink', title: 'Register', path: '/back/register'},
                {id: 8, icon: 'ni ni-send text-dark', title: 'Upgrade', path: '/back/upgrade'},
            ]
        }),
        methods:{
            goTo(item){
                this.selected = item.id
                this.$router.push({path: item.path})
            }
        }
    }
</script>

<style scoped>

</style>
0
