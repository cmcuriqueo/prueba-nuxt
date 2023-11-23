import createPersistedState from 'vuex-persistedstate';

export default ({ isDev, store, app }) => {
    createPersistedState({
        key: 'auth',
        paths: [
            'auth.accessToken',
            'auth.refreshToken'
        ],
        storage: {
            getItem: key => app.$cookiz.get(key),
            setItem: (key, value) => app.$cookiz.set(key, value, {
                path: '/',
                expires: new Date(Date.now() + 14 * 864e5),
                secure: !isDev
            }),
            removeItem: key => app.$cookiz.remove(key)
        },
        assertStorage() {
            return !!app.$cookiz;
        }
    })(store);
};