<template>
  <div class="home">
    <custom-filter />
    <search-bar />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import CustomFilter from '@/components/CustomFilter.vue';

export default {
  name: 'Home',

  components: {
    SearchBar,
    CustomFilter
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
