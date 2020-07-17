<template>
  <div class="container">
    <HeaderSection :data="loggedInUser ? loggedInUser.user : {}"></HeaderSection>
    <div class="col-6 offset-3">
      <UserInfoSection :data="loggedInUser ? loggedInUser.user : {}" @toggleModal="toggleModal"></UserInfoSection>
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
    <EditProfile
      :isOpen="modalType == 'edit_profile'"
      @onRequestClose="toggleModal('')"
      :user="loggedInUser ? loggedInUser.user : {}"
    ></EditProfile>
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
