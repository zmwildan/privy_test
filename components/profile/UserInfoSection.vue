<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center mb-3 mt-3">
        <b>Profile</b>
        <button class="btn btn-primary btn-sm" @click="buttonCLick('edit_profile')">Edit Profile</button>
      </div>
      <div class="row">
        <div class="col-3">Name</div>
        <div class="col-9">{{data.name}}</div>
      </div>
      <div class="row">
        <div class="col-3">Gender</div>
        <div class="col-9">{{data.gender || '-'}}</div>
      </div>
      <div class="row">
        <div class="col-3">Birthday</div>
        <div class="col-9">{{data.birthday || '-'}}</div>
      </div>
      <div class="row">
        <div class="col-3">Hometown</div>
        <div class="col-9">{{data.hometown || '-'}}</div>
      </div>
      <div class="row">
        <div class="col-3">Bio</div>
        <div class="col-9">{{data.bio || '-'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    toggleModal: {
      type: Function
    }
  },
  methods: {
    buttonCLick: function(type) {
      this.$emit("toggleModal", type);
    }
  }
};
</script>