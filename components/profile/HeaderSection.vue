<template>
  <div class="w-100 profile-header d-flex justify-content-center align-items-end">
    <div
      class="cover-picture"
      :style="{ backgroundImage: `url(${data.cover_picture && data.cover_picture.url})` }"
      @click="$refs.inputCover.click()"
    ></div>
    <div
      class="profile-picture"
      :style="{ backgroundImage: profile_picture}"
      @click="$refs.inputProfilePicture.click()"
    ></div>
    <input
      type="file"
      ref="inputProfilePicture"
      style="display: none"
      @change="handleUploadProfilePicture"
    />
    <input type="file" ref="inputCover" style="display: none" @change="handleUploadCover" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    profile_picture: function() {
      let profile_picture = "url('/images/default-profile-picture.png')";
      if (this.data.user_picture) {
        profile_picture = `url(${this.data.user_picture.picture.url})`;
      }
      return profile_picture;
    }
  },
  methods: {
    handleUploadProfilePicture: async function() {
      const image = this.$refs.inputProfilePicture.files[0];
      let formData = new FormData();
      formData.append("image", image);

      await this.$axios.post("api/uploads/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      this.$auth.fetchUser();
    },
    handleUploadCover: async function() {
      const image = this.$refs.inputCover.files[0];
      let formData = new FormData();
      formData.append("image", image);

      await this.$axios.post("api/uploads/cover", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      this.$auth.fetchUser();
    }
  }
};
</script>

<style>
.profile-header {
  height: 300px;
  position: relative;
  border-bottom: 1px solid #000;
}
.cover-picture {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
}
.profile-picture {
  height: 150px;
  width: 150px;
  background-image: url("/images/default-profile-picture.png");
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  z-index: 1;
}
</style>