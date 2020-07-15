<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <h2 class="text-center mt-5">Register!</h2>

          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="register">
            <div class="form-group">
              <input
                v-model="phone"
                placeholder="no hp"
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
            <div class="form-group">
              <input
                v-model="country"
                placeholder="country"
                type="text"
                class="form-control"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>

          <div class="text-center mt-3">
            Already got an account?
            <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
      country: "",
      error: null
    };
  },
  computed: {
    location: function(params) {
      return this.$store.state.location.location;
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios
          .post("api/register", {
            phone: this.phone,
            country: this.country,
            password: this.password,
            latlong: this.location.latitude + "," + this.location.longitude,
            device_token: "-",
            device_type: 2
          })
          .then(r => r.data)
          .then(response => {
            this.$store.commit("user/FETCH_USER", response.data.user);
          });

        this.$router.push("/otp");
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
