<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center mb-3 mt-3">
        <b>Career</b>
        <button class="btn btn-primary btn-sm" @click="buttonCLick('add_career')">Add Career</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position</th>
            <th scope="col">Company Name</th>
            <th scope="col">Starting From</th>
            <th scope="col">Ending In</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{data.position || '-'}}</td>
            <td>{{data.company_name}}</td>
            <td>{{data.starting_from}}</td>
            <td>{{data.ending_in}}</td>
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