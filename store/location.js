export const state = () => ({
  location: {},
  error: null
});

export const mutations = {
  FETCH_LOCATION(state, response) {
    state.location = response;
  },
  FETCH_ERROR(state, response) {
    state.error = response;
  }
};
