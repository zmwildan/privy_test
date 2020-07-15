<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <h1>Login</h1>
      <form method="post" @submit.prevent="login">
        <div class="form-group">
          <input
            v-model="phone"
            placeholder="phone"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            placeholder="password"
            type="password"
            class="form-control"
          />
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
      error: null
    };
  },
  computed: {
    location: function(params) {
      return this.$store.state.location.location;
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            phone: this.phone,
            password: this.password,
            latlong: this.location.latitude + "," + this.location.longitude,
            device_token: "-",
            device_type: 2
          }
        });
        // this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
