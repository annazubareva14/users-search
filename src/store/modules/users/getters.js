const getters = {
  getUsers: (state) => state.users,
  numberOfPage: (state) => state.numberOfPage,
  usersTotalCount: (state) => state.usersTotalCount,
  errorCode: (state) => state.errorCode
};

export default getters;
