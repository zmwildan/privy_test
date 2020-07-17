<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center mb-3 mt-3">
        <b>Education</b>
        <button class="btn btn-primary btn-sm" @click="buttonCLick('add_education')">Add Education</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">School Name</th>
            <th scope="col">Graduation Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{data.school_name || '-'}}</td>
            <td>{{data.graduation_time || '-'}}</td>
          </tr>
        </tbody>
      </table>
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