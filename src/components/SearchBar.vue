<template>
  <div class="search-bar__wrapper">
    <div class="search-bar">
      <input
        v-model.trim="userName"
        type="text"
        class="search-bar__input"
        placeholder="Enter the name"
        @keypress.enter="onClickSearch"
      />
      <button type="submit" class="search-bar__button" @click="onClickSearch">
        search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  props: {
    inputValue: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      userName: this.inputValue
    };
  },

  methods: {
    onClickSearch() {
      this.$emit('search', this.userName);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/scss/CustomVariables.scss';

.search-bar__wrapper {
  width: 100%;
}

.search-bar {
  width: 100%;
  display: flex;

  &__input {
    width: 100%;
    border: $border;
    border-right: none;
    padding: 12px 15px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: $font-color-subtitle;
    font-size: $font-size-basic;
  }

  &__button {
    border: none;
    background: $primary;
    padding: 5px;
    text-align: center;
    border-radius: 0 5px 5px 0;
    text-transform: uppercase;
    color: $white;
    cursor: pointer;
  }
}
</style>
