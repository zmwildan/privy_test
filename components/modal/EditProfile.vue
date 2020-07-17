<template>
  <portal v-if="isOpen" to="modal">
    <div
      class="modal show"
      tabindex="-1"
      role="dialog"
      :style="{ display: isOpen ? 'block' : 'none' }"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Education</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Notification :message="error" v-if="error" />
            <div class="form-group">
              <input v-model="name" placeholder="Name" type="text" class="form-control" />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group form-check">
                  <input type="radio" class="form-check-input" value="0" v-model="gender" />
                  <label class="form-check-label">Male</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group form-check">
                  <input type="radio" class="form-check-input" value="1" v-model="gender" />
                  <label class="form-check-label">Female</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <input v-model="birthday" placeholder="Birthday" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <input v-model="hometown" placeholder="Hometown" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <input v-model="bio" placeholder="Bio" type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">No</button>
              <button type="button" class="btn btn-primary" @click="onSubmit">Submit</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
/* eslint-disable vue/require-default-prop */

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    onRequestClose: {
      type: Function
    },
    user: {
      type: Object
    }
  },
  data: function() {
    return {
      name: "",
      gender: "",
      birthday: "",
      hometown: "",
      bio: "",
      error: ""
    };
  },
  mounted: function() {
    this.name = this.user.name;
    this.birthday = this.user.birthday;
    this.hometown = this.user.hometown;
    this.bio = this.user.bio;
    if (this.user.gender == "female") {
      this.gender = 1;
    } else if (this.user.gender == "male") {
      this.gender = 0;
    }
  },
  methods: {
    closeModal: function() {
      this.$emit("onRequestClose");
    },
    onSubmit: async function() {
      try {
        await this.$axios.post("api/profile", {
          name: this.name,
          gender: this.gender * 1,
          hometown: this.hometown,
          bio: this.bio,
          birthday: this.birthday
        });

        await this.$auth.fetchUser();
        this.closeModal();
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
