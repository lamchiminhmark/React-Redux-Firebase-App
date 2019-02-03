export const createProject = project => {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    try {
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Not',
        authorLastName: 'Minh',
        authorId: 1234,
        createdAt: new Date()
      });
      dispatch({ type: 'CREATE_PROJECT', project });
    } catch (err) {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    }
  };
};
