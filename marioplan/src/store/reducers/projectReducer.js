const initState ={}

export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.error(action.err);
      return state;
    default:
      return state;
  }
};
