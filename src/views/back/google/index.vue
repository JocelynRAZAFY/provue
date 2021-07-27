<template>
    <div class="container-fluid mt--6">
        <div class="row" style="margin-top: 6em">
            <div class="col">
                <div class="card border-0">
                    <div id="map-default" class="map-canvas" data-lat="40.748817" data-lng="-73.985428" style="height: 600px;"></div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer-component/>
    </div>
</template>

<script>
    import FooterComponent from "../../../components/FooterComponent";
    export default {
        name: "index",
        components: {FooterComponent}
    }
</script>

<style scoped>

</style>
