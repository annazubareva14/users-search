import axios from '@/services/api.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getUsersList({ commit, dispatch }, params) {
    if (!params.page) {
      params.page = 1;
    }

    try {
      const { data } = await axios.get('/search/users', { params });

      for (let element of data.items) {
        const userInfo = await dispatch('getUserRepos', element.login);
        const reposNumber = userInfo.public_repos;

        element.reposNumber = reposNumber;
      }
      commit(mutationTypes.SET_USERS_SUCCESS, data);
      commit(mutationTypes.SET_USERS_TOTAL_COUNT, data);
    } catch (error) {
      commit(mutationTypes.SET_USERS_FAIL, error.code);
      commit(mutationTypes.CLEAR_SEARCH_RESULTS);
    }
  },

  async getUserRepos({ commit }, userName) {
    try {
      const { data } = await axios.get(`/users/${userName}`);

      return data;
    } catch (error) {
      commit(mutationTypes.SET_USERS_FAIL, error.code);
      commit(mutationTypes.CLEAR_SEARCH_RESULTS);
    }
  },

  clearSearchResults({ commit }) {
    commit(mutationTypes.CLEAR_SEARCH_RESULTS);
  },

  setCurrentPage({ commit }, currentPage) {
    commit(mutationTypes.SET_CURRENT_PAGE, currentPage);
  }
};

export default actions;
