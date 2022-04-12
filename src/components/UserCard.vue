<template>
  <div class="user-card">
    <div class="user-card__photo__wrapper">
      <img :src="photo" alt="photo" class="user-card__photo" />
    </div>
    <div class="user-card__info">
      <div class="user-card__login">
        Login: <b> {{ login }} </b>
      </div>
      <a :href="url" class="user-card__url">See profile</a>
      <a :href="repos" class="user-card__repos">
        See {{ login }}'s repositories
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    photo: {
      type: String,
      default: ''
    },

    login: {
      type: String,
      default: ''
    },

    url: {
      type: String,
      default: ''
    },

    repos: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.user-card {
  display: flex;
  padding: 15px;
  border-radius: 5px;
  box-shadow: $shadow;

  &:hover {
    background-color: $white-hover;
  }

  &__photo__wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  &__photo {
    width: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    gap: 10px;
    color: $font-color-subtitle;
  }

  &__url,
  &__repos {
    text-decoration: none;
    color: $font-color-subtitle;
  }

  &__url:hover,
  &__repos:hover {
    color: $primary;
    transition: $transition;
  }
}
</style>
