<template>
  <div class="container">
    <div class="col-6 offset-3">
      <CareerSection
        :data="loggedInUser ? loggedInUser.user.career : {}"
        @toggleModal="toggleModal"
      ></CareerSection>
      <EducationSection
        :data="loggedInUser ? loggedInUser.user.education : {}"
        @toggleModal="toggleModal"
      ></EducationSection>
    </div>
    <AddCareer :isOpen="modalType == 'add_career'" @onRequestClose="toggleModal('')"></AddCareer>
    <AddEducation :isOpen="modalType == 'add_education'" @onRequestClose="toggleModal('')"></AddEducation>
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
