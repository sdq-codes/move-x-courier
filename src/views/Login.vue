<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <base-button @click="login" type="primary" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                        </div>
                        <div class="col-6 text-right">
                            <router-link :to="{ name: 'register' }" href="#" class="text-light">
                                <small>Create new account</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {validations} from "@/mixins/validations";
import {APIService} from "@/BackendApiService";

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  mixins: [validations],
  methods: {
    login () {
      const sessionId = localStorage.getItem('session_id')
      if (
          this.isEmail(this.email) &&
          this.isNotEmpty(this.password) &&
          this.isNotEmpty(this.email)) {
        const service = new APIService()
        service.loginUser(this.email, this.password, sessionId).then(response => {
          console.log(response.data)
          localStorage.setItem('logged_in_user_id', response.data.result[0].id)
          this.$router.push({ name: 'dashboard' })
        }).catch(err => {
          console.log(err)
        })
      }
    },
  }
};
</script>
<style>
</style>
