import axios from '@/services/api.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getUsersList({ commit }, params) {
    if (params.q === '') {
      delete params.q;
    }

    try {
      const { data } = await axios.get('/search/users', { params });

      commit(mutationTypes.SET_USERS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_USERS_FAIL, error.code);
      commit(mutationTypes.CLEAR_SEARCH_RESULTS);
    }
  },

  clearSearchResults({ commit }) {
    commit(mutationTypes.CLEAR_SEARCH_RESULTS);
  }
};

export default actions;
