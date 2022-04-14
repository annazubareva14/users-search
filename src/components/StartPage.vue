<template>
  <div class="start-img__wrapper">
    <span class="start-img__text">Start search</span>
    <img
      src="../assets/GitHub-Logo.wine.svg"
      alt="GitHubLogo"
      class="start-img"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';
.start-img {
  width: 100%;

  &__wrapper {
    display: inline-flex;
    flex-direction: column;
    max-width: 500px;
  }

  &__text {
    font-size: $font-size-title;
    color: $font-color-text;
  }
}
</style>
