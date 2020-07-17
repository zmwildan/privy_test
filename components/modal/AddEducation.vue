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
              <input
                v-model="school_name"
                placeholder="School Name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                v-model="graduation_time"
                placeholder="Graduation Time"
                type="text"
                class="form-control"
              />
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
    }
  },
  data: function() {
    return {
      school_name: "",
      graduation_time: "",
      error: ""
    };
  },
  methods: {
    closeModal: function() {
      this.$emit("onRequestClose");
    },
    onSubmit: async function() {
      try {
        await this.$axios.post("api/profile/education", {
          school_name: this.school_name,
          graduation_time: this.graduation_time
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
