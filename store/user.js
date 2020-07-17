export const state = () => ({
  user: {},
  error: null
});

export const mutations = {
  FETCH_USER(state, response) {
    state.user = response;
  }
};
