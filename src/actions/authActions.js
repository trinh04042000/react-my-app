export const loginAction = (payload) => ({
    type: 'login',
    payload,
});

export const logoutAction = () => ({
    type: 'logout',
});