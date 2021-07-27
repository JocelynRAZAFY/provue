<template>
    <form role="form">
        <div class="form-group mb-3">
            <div class="input-group input-group-merge input-group-alternative">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="ni ni-email-83"></i>
                    </span>
                </div>
                <input class="form-control"
                       v-model="formLogin.email"
                       placeholder="Email"
                       type="email">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group input-group-merge input-group-alternative">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="ni ni-lock-circle-open"></i>
                    </span>
                </div>
                <input class="form-control"
                       v-model="formLogin.password"
                       placeholder="Password"
                       type="password">
            </div>
        </div>
        <div class="text-center">
            <button type="button"
                    @click="login"
                    class="btn btn-primary my-4">Sign in</button>
        </div>
    </form>
</template>

<script>
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: "FormLogin",
        setup () {
            return { v$: useVuelidate() }
        },
        data: () => ({
            formLogin: {}
        }),
        validations:{
            formLogin: {
                email: {required},
                password: {required}
            },
        },
        computed:{
            ...mapState({
                token: (state) => state.user.token
            })
        },
        methods:{
            ...mapActions('user',['loginAction']),
            async login(){
                if (this.v$.formLogin.$invalid) {
                    this.$notify({
                        title: 'Obligatoire',
                        message: 'Tous les champs sont obligatoires',
                        type: 'warning'
                    });
                    return
                }

                await this.loginAction(this.formLogin)
                if(this.token != null){
                    await this.$router.push({ path: '/back' })
                }
            }
        }
    }
</script>

<style scoped>

</style>
