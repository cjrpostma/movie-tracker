export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'HAS_ERROR':
      return action.payload;
    default:
      return state;
  }
};
