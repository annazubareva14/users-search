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
  },
  [mutationTypes.SET_CURRENT_PAGE](state, currentPage) {
    state.currentPage = currentPage;
  },
  [mutationTypes.SET_USERS_TOTAL_COUNT](state, data) {
    state.usersTotalCount = data.total_count;
  }
};

export default mutations;
