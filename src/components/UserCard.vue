<template>
  <div class="user-card">
    <div class="user-card__photo__wrapper">
      <img :src="photo" alt="photo" class="user-card__photo" />
    </div>
    <div class="user-card__info">
      <div class="user-card__login">
        <b> {{ login }} </b>
      </div>
      <div class="user-card__repos">
        Has <b>{{ reposNumber }}</b> repositories
      </div>
      <a :href="url" target="_blank" class="user-card__url"
        >Go to <b>{{ login }}</b
        >'s profile</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    photo: {
      type: String,
      required: true,
      default: ''
    },

    login: {
      type: String,
      required: true,
      default: ''
    },

    url: {
      type: String,
      required: true,
      default: ''
    },

    reposNumber: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.user-card {
  display: flex;
  padding: 15px;
  background-color: $light-grey;
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

  &__url {
    text-decoration: none;
    color: $font-color-subtitle;

    &:hover {
      color: $primary;
      transition: $transition;
    }
  }
}
</style>
