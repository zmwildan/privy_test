<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <h2 class="text-center mt-5">Verification!</h2>

          <Notification :message="message" v-if="message" />

          <form method="post" @submit.prevent="sendOtp">
            <div class="form-group">
              <input
                v-model="code"
                placeholder="code"
                type="text"
                class="form-control"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Verifikasi</button>
            </div>
          </form>

          <div class="text-center mt-3">
            <button class="btn btn-link" @click="resend">
              Kirim ulang kode verifikasi
            </button>
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
      code: "",
      error: null,
      message: ""
    };
  },
  computed: {
    user: function(params) {
      return this.$store.state.user.user;
    }
  },
  methods: {
    sendOtp: async function() {
      try {
        await this.$axios.post("api/register/otp/match", {
          user_id: this.user.id,
          otp_code: this.code
        });
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    async resend() {
      try {
        await this.$axios.post("api/register/otp/request", {
          phone: this.user.phone
        });
        this.message = "resend success";
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
