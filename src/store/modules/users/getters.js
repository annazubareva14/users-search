const getters = {
  getUsers: (state) => state.users,
  currentPage: (state) => state.currentPage,
  //numberOfPage: (state) => state.numberOfPage,
  usersTotalCount: (state) => state.usersTotalCount,
  errorCode: (state) => state.errorCode
};

export default getters;
