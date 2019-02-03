export const signIn = credentials => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
                )
            dispatch({type: 'LOG_IN_SUCCESS'});
        } catch(err) {
            dispatch({type: 'LOG_IN_ERROR', err});
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signOut();
            console.log('Sign out dispatching');
            dispatch({type: 'LOG_OUT_SUCCESS'});
        } catch (err) {
            dispatch({type: 'LOG_OUT_ERROR'});
        }

    } 
}
