<template>
  <div>
    <v-pagination
      v-model="page"
      :length="paginationLength"
      color="#24292f"
      :total-visible="totalVisible"
      @input="setPageNumber(page)"
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
    }
  },

  data() {
    return {
      page: 1,
      totalVisible: 5
    };
  },

  methods: {
    ...mapActions('UsersModule', ['setPageNumber'])
  }
};
</script>
