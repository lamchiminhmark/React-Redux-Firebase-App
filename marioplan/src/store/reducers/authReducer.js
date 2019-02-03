const initState = {
    err: undefined,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
        return {
            ...state,
            err: undefined,
        }
        case 'LOG_IN_ERROR':
        return {
            ...state,
            err: 'Error'
        }
        default:
        return state;
    }
}