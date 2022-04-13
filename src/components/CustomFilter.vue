<template>
  <div v-click-outside="onCkickHideOptions" class="filter-wrapper">
    <div class="custom-select-block">
      <p class="custom-select-block__title">Sort by</p>
      <div class="custom-select">
        <div
          class="custom-select__selected"
          @click="onClickChangeOptionsVisibility"
        >
          {{ activeOption }}
          <p>
            <i
              class="arrow"
              :class="{
                arrow__up: isOptionsVisible,
                arrow__down: !isOptionsVisible
              }"
            ></i>
          </p>
        </div>

        <div v-if="isOptionsVisible" class="custom-select__options">
          <p
            v-for="(option, index) in options"
            :key="index"
            class="custom-select__option"
            @click="onClickSelectOption(option.value)"
          >
            {{ option.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SELECTED_OPTIONS_KEYS } from './helper';

export default {
  name: 'CustomFilter',

  data() {
    return {
      isOptionsVisible: false,
      options: [
        {
          value: SELECTED_OPTIONS_KEYS.MORE_TO_LESS,
          name: 'With most repositories first'
        },
        {
          value: SELECTED_OPTIONS_KEYS.LESS_TO_MORE,
          name: 'With least repositories first'
        }
      ],
      selectedOption: SELECTED_OPTIONS_KEYS.MORE_TO_LESS
    };
  },

  computed: {
    activeOption() {
      return this.options.find(({ value }) => value === this.selectedOption)
        ?.name;
    }
  },

  methods: {
    onClickSelectOption(value) {
      this.$emit('click', value);
      this.selectedOption = value;
      this.isOptionsVisible = false;
    },

    onClickChangeOptionsVisibility() {
      this.isOptionsVisible = !this.isOptionsVisible;
    },

    onCkickHideOptions() {
      this.isOptionsVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.filter-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: $font-color-title;
}

.filter-wrapper p {
  margin-bottom: 0;
}

.filter-block {
  display: flex;
  border: $border;
  border-radius: 10px;
  margin-right: 30px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }

  &__icon {
    width: 50%;
    height: auto;
  }
}

.active {
  background-color: $light-grey;
}

.custom-select-block {
  position: relative;

  &__title {
    color: $font-color-text;
    position: absolute;
    top: -11px;
    left: 10px;
    padding: 0 2px;
    background: linear-gradient(to bottom, #ffffff00 0%, #ffffff 50%);
    z-index: 3;
  }
}

.custom-select {
  position: relative;
  min-width: 300px;
  border: $border;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;

  &__selected {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 15px;
    width: 100%;
    background-color: $white;
    color: $font-color-subtitle;
    font-size: $font-size-basic;
    border-radius: 5px;

    & p {
      position: absolute;
      right: 10px;
    }
  }

  &__options {
    position: absolute;
    left: -2px;
    margin-top: 4px;
    width: calc(100% + 4px);
    border: $border;
    border-radius: 5px;
    background-color: $white;
    color: $font-color-subtitle;
    font-size: $font-size-basic;
  }

  &__option {
    padding: 12px 15px;
  }

  &__option:hover {
    color: $primary;
    transition: $transition;
  }

  .arrow {
    border: solid $secondary;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 3px;

    &__up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    &__down {
      margin-bottom: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
}
</style>
