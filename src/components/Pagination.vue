<template>
  <div>
    <v-pagination
      v-model="page"
      :length="paginationLength"
      color="#24292f"
      :total-visible="totalVisible"
      @input="setCurrentPage(page)"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Pagination',

  props: {
    paginationLength: {
      type: Number,
      default: 0
    },

    currentPage: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      page: this.currentPage,
      totalVisible: 7
    };
  },

  watch: {
    currentPage(value) {
      this.page = value;
    }
  },

  methods: {
    ...mapActions('UsersModule', ['setCurrentPage'])
  }
};
</script>
