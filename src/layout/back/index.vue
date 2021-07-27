<template>
    <div>
        <side-nav/>
        <div class="main-content" id="panel">
            <nav-bar/>
            <header-component v-if="$route.path == '/back/dashboard'"/>
            <!-- Page content -->
            <content-app/>
        </div>
    </div>
</template>

<script>
    import SideNav from "./components/SideNav";
    import NavBar from "./components/NavBar";
    import HeaderComponent from "./components/HeaderComponent";
    import ContentApp from "../../components/ContentApp";

    export default {
        name: "index",
        components: {ContentApp, HeaderComponent, NavBar, SideNav},
        data: () => ({

        }),
        mounted() {
            document.body.classList.remove('bg-default')
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/vendor/nucleo/css/nucleo.css";
    @import "../../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
    @import "../../../assets/css/argon.css";
</style>
