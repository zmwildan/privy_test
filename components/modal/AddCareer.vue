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
            <h5 class="modal-title">Add Career</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input v-model="position" placeholder="Position" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <input
                v-model="company_name"
                placeholder="Company name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="form-group row">
              <div class="col-6">
                <input
                  v-model="starting_from"
                  placeholder="Starting from"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="col-6">
                <input v-model="ending_in" placeholder="Ending in" type="text" class="form-control" />
              </div>
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
      position: "",
      company_name: "",
      starting_from: "",
      ending_in: ""
    };
  },
  methods: {
    closeModal: function() {
      this.$emit("onRequestClose");
    },
    onSubmit: async function() {
      try {
        await this.$axios.post("api/profile/career", {
          position: this.position,
          company_name: this.company_name,
          starting_from: this.starting_from,
          ending_in: this.ending_in
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
