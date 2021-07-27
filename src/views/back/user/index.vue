<template>
    <div class="container-fluid mt--6">
        <!--<div class="row">
            <div class="col-xl-8">
                <sales/>
            </div>
            <div class="col-xl-4">
                <performance/>
            </div>
        </div>-->
        <div class="row">
            <div class="col-xl-8">
                <visits/>
            </div>
            <div class="col-xl-4">
                <traffic/>
            </div>
        </div>

        <footer-component/>
    </div>
</template>

<script>
    import Visits from "./components/Visits";
    import Traffic from "./components/Traffic";
    import FooterComponent from "../../../components/FooterComponent";
    export default {
        name: "index",
        components: {FooterComponent, Traffic, Visits}
    }
</script>

<style scoped>

</style>
