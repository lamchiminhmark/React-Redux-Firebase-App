export const createProject = project => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    // ADD Async code
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
