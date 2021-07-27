<template>
    <div>
        <!-- Main content -->
        <div class="main-content">
            <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <div class="container mt--8 pb-5">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-7">
                        <div class="card bg-secondary border-0 mb-0">
                            <div class="card-header bg-transparent pb-5">
                                <div class="text-muted text-center mt-2 mb-3">
                                    <small>Sign in with</small>
                                </div>
                                <social-login/>
                            </div>
                            <div class="card-body px-lg-5 py-lg-5">
                                <div class="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form-login/>
                            </div>
                        </div>
                        <other-action/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormLogin from "./components/FormLogin";
    import SocialLogin from "./components/SocialLogin";
    import OtherAction from "./components/OtherAction";
    export default {
        name: "index",
        components: {OtherAction, SocialLogin, FormLogin},
        data: () => ({

        }),
        mounted() {
            document.body.classList.add('bg-default')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/vendor/nucleo/css/nucleo.css";
    @import "../../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
    @import "../../../assets/css/argon.css";
</style>
