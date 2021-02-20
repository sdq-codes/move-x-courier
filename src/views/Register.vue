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
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="name"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input
                                            class="mb-3"
                                            placeholder="Business Name"
                                            v-model="businessName"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input
                                            class="mb-3"
                                            placeholder="Default Address"
                                            v-model="address"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model="email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                              <small class="text-primary">Telephone must be of format 234901234****</small>

                              <base-input
                                            type="number"
                                            v-model="telephone"
                                            @keypress="isNumber"
                                            placeholder="Telephone"
                                            addon-left-icon="ni ni-tablet-button">
                                </base-input>
                                <base-input
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700" v-if="password.length < 8">Weak</span>
                                        <span class="text-success font-weight-700" v-else-if="password.length >= 8 && password.length < 14">Okay</span>
                                        <span class="text-success font-weight-700" v-else>Strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="register">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
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
      name: "",
      email: "",
      password: "",
      tel: "",
      businessName: "",
      address: "",
      telephone: "",
    }
  },
  mixins: [validations],
  methods: {
    register () {
      const sessionId = localStorage.getItem('session_id')
      if (
          this.isNotEmpty(this.name, 'Name') &&
          this.isEmail(this.email) &&
          this.isNotEmpty(this.email, 'Email') &&
          this.isNotEmpty(this.password, 'Password') &&
          this.isNotEmpty(this.businessName, 'Business Name') &&
          this.isGraterThan(this.password, 8, 'Password') &&
          this.isCorrectTelephone(this.telephone) &&
          this.isNotEmpty(this.telephone, 'Telephone') &&
          this.isSize(this.telephone, 13, 'Telephone')
      ) {
        const service = new APIService()
        service.registerUser({
          name: this.name,
          business_name: this.businessName,
          address: this.address,
          is_courier: false,
          uses_courier: true,
          customer_email: this.email,
          customer_password: this.password,
          customer_phone_number: this.telephone

        }, sessionId).then(response => {
          localStorage.setItem('logged_in_user_id', response.data.result)
          this.$swal(
              "Successfully Registered",
              "Your account with moveX has been succesfully created",
              "success"
          )
          this.$router.push({ name: 'dashboard' })
        })
      } else {
        alert("not")
      }
    },
  }
};
</script>
<style>
</style>
