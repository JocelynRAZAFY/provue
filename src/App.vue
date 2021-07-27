<template>
  <div id="app-page">
    <router-view></router-view>
  </div>

</template>

<script>
  import axios from "axios";
  import {mapMutations,mapState} from "vuex"
  import {getToken} from "./plugins/auth";
  export default {
    name: "App",
    data(){
      return {
        connexion: null
      }
    },
    computed:{
      ...mapState({
        token: (state) => state.user.token
      })
    },
    created() {
      axios.interceptors.response.use(undefined, (err) => {
        return new Promise(() => {
          if (err.response.status === 401) {
            this.$notify({
              title: 'Login',
              message: 'Email ou mot de passe incorrect',
              type: 'warning'
            });
          }else {
            window.location.href = '/';
          }
          throw err;
        });
      });
      this.setToken(getToken() ?? null)

    },
    methods:{
      ...mapMutations('user',['setToken']),
    },
  }
</script>
<style lang="scss">

</style>
