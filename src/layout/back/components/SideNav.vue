<template>
    <nav class="sidenav navbar navbar-vertical
        fixed-left  navbar-expand-xs navbar-light bg-white"
         id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <side-nav-header/>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <nav-items/>
                    <!-- Divider -->
                    <hr class="my-3">
                    <!-- Heading -->
                    <h6 class="navbar-heading p-0 text-muted">
                        <span class="docs-normal">Documentation</span>
                    </h6>
                    <!-- Navigation -->

                    <navigation/>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import SideNavHeader from "./SideNavHeader";
    import NavItems from "./NavItems";
    import Navigation from "./Navigation";
    export default {
        name: "SideNav",
        components: {Navigation, NavItems, SideNavHeader}
    }
</script>

<style scoped>

</style>
