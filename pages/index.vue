<template>
  <div class="container">
    <div class="col-6 offset-3">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center mb-3 mt-3">
            <b>Career</b>
            <button class="btn btn-primary btn-sm" @click="toggleModal('add_career')">Add Career</button>
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
                <td>{{loggedInUser.user.career.position || '-'}}</td>
                <td>{{loggedInUser.user.career.company_name}}</td>
                <td>{{loggedInUser.user.career.starting_from}}</td>
                <td>{{loggedInUser.user.career.ending_in}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <AddCareer :isOpen="modalType == 'add_career'" @onRequestClose="toggleModal('')"></AddCareer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      modalType: ""
    };
  },
  computed: {
    ...mapGetters(["loggedInUser"])
  },
  methods: {
    toggleModal: function(type) {
      this.modalType = type;
    }
  }
};
</script>

<style>
</style>
