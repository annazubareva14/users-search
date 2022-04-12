import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_USERS_SUCCESS](state, data) {
    state.users = data.items;
  },
  [mutationTypes.SET_USERS_FAIL](state, status) {
    state.errorCode = status;
  },
  [mutationTypes.CLEAR_SEARCH_RESULTS](state) {
    state.users = null;
  }
};

export default mutations;
