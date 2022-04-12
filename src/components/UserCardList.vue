<template>
  <div class="user-card__wrapper">
    <user-card
      v-for="user in users"
      :key="user.id"
      :photo="user.avatar_url"
      :login="user.login"
      :url="user.html_url"
      :repos="user.repos_url"
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
      default: () => []
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
