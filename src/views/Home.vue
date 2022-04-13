<template>
  <div class="home-page">
    <div class="home-page__search">
      <custom-filter @click="changeSortOrder" />
      <search-bar :input-value="userName" @search="onClickSearch" />
    </div>

    <div class="homme-page__users">
      <user-card-list :users="getUsers" />
    </div>
    <pagination
      v-show="isPaginationShown"
      :pages-number="numberOfPage"
      :pagination-length="getPaginationLength"
      :users-quantity="usersTotalCount"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import CustomFilter from '@/components/CustomFilter.vue';
import UserCardList from '@/components/UserCardList.vue';
import Pagination from '@/components/Pagination.vue';
import {
  DEFAULT_ITEMS_PER_PAGE,
  SELECTED_OPTIONS_KEYS,
  ASCENDING,
  DESCENDING
} from '@/components/helper.js';

export default {
  name: 'Home',

  components: {
    SearchBar,
    CustomFilter,
    UserCardList,
    Pagination
  },

  data() {
    return {
      userName: '',
      sortValue: 'repositories',
      sortOrder: DESCENDING
    };
  },

  computed: {
    ...mapGetters('UsersModule', [
      'getUsers',
      'numberOfPage',
      'usersTotalCount'
    ]),

    getPaginationLength() {
      return Math.ceil(this.usersTotalCount / DEFAULT_ITEMS_PER_PAGE);
    },

    isPaginationShown() {
      return this.getPaginationLength > 1;
    }
  },

  watch: {
    numberOfPage() {
      this.onClickSearch(this.userName);
    },

    sortOrder() {
      this.onClickSearch(this.userName);
    }
  },

  async mounted() {
    const { q, page } = this.$route.query;

    if (q) {
      this.userName = q;
      // eslint-disable-next-line camelcase
      await this.getUsersList({
        q,
        page,
        sort: this.sortValue,
        order: this.sortOrder,
        // eslint-disable-next-line camelcase
        per_page: DEFAULT_ITEMS_PER_PAGE
      });
    }
  },

  methods: {
    ...mapActions('UsersModule', ['getUsersList', 'setPageNumber']),

    changeSortOrder(value) {
      if (value === SELECTED_OPTIONS_KEYS.MORE_TO_LESS) {
        this.sortOrder = DESCENDING;

        return;
      }
      this.sortOrder = ASCENDING;
    },

    async onClickSearch(userName) {
      this.userName = userName;
      await this.getUsersList({
        q: this.userName,
        page: this.numberOfPage,
        sort: this.sortValue,
        order: this.sortOrder,
        // eslint-disable-next-line camelcase
        per_page: DEFAULT_ITEMS_PER_PAGE
      });
      this.$router.push({
        query: { q: this.userName, page: this.numberOfPage }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.home-page {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__search {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
