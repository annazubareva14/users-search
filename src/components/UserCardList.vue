<template>
  <div class="user-card__wrapper">
    <user-card
      v-for="user in getSortedUsers"
      :key="user.id"
      :photo="user.avatar_url"
      :login="user.login"
      :url="user.html_url"
      :repos-number="user.reposNumber"
    />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
export default {
  name: 'UserCardList',

  components: { UserCard },

  props: {
    users: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  computed: {
    getSortedUsers() {
      const sortedUsers = this.users;

      return sortedUsers.sort((a, b) => a.reposNumber - b.reposNumber);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.user-card__wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
