<template>
  <div class="home-page">
    <div class="home-page__search">
      <custom-filter @click="changeSortOrder" />
      <search-bar :input-value="userName" @search="onClickSearch" />
    </div>

    <div v-if="getUsers.length">
      <user-card-list :users="getUsers" />
    </div>
    <div v-else>
      <start-page class="home-page__start" />
    </div>

    <pagination
      v-show="isPaginationShown"
      :pagination-length="getPaginationLength"
      :current-page="currentPage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import CustomFilter from '@/components/CustomFilter.vue';
import UserCardList from '@/components/UserCardList.vue';
import Pagination from '@/components/Pagination.vue';
import StartPage from '@/components/StartPage.vue';
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
    Pagination,
    StartPage
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
      'currentPage',
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
    currentPage() {
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
    ...mapActions('UsersModule', ['getUsersList']),

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
        page: this.currentPage,
        sort: this.sortValue,
        order: this.sortOrder,
        // eslint-disable-next-line camelcase
        per_page: DEFAULT_ITEMS_PER_PAGE
      });
      this.$router.push({
        query: { q: this.userName, page: this.currentPage }
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

    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
  }
}
</style>
