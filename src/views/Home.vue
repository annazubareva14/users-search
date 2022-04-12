<template>
  <div class="home-page">
    <div class="home-page__search">
      <custom-filter />
      <search-bar :input-value="userName" @search="onClickSearch" />
    </div>

    <div homme-page__users>
      <user-card-list :users="getUsers" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import CustomFilter from '@/components/CustomFilter.vue';
import UserCardList from '@/components/UserCardList.vue';

export default {
  name: 'Home',

  components: {
    SearchBar,
    CustomFilter,
    UserCardList
  },

  data() {
    return {
      userName: ''
    };
  },

  computed: {
    ...mapGetters('UsersModule', ['getUsers'])
  },

  async mounted() {
    const { q } = this.$route.query;

    if (q) {
      this.userName = q;
      await this.getUsersList({ q });
    }
  },

  methods: {
    ...mapActions('UsersModule', ['getUsersList']),

    async onClickSearch(userName) {
      this.userName = userName;
      await this.getUsersList({ q: this.userName });
      this.$router.push({
        query: { q: this.userName }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__search {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
