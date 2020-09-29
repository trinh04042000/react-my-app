export const initialAuthState = {
    user: null,
    accessToken: null,
};

export const initAuth = (initArg) => initArg;

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'login': return { ...state, user: action.payload.user, accessToken: action.payload.accessToken };
        case 'logout': return { ...state, ...initialAuthState };
        default: throw new Error('Unexpected action');
    }
};