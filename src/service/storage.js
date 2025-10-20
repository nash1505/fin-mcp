const StorageService = {
  setUser: (user) => {
    const encrypted = btoa(JSON.stringify(user));
    const userState = { data: encrypted, timestamp: Date.now() };
    const existing = JSON.parse(sessionStorage.getItem('__app_state') || '{}');
    sessionStorage.setItem('__app_state', JSON.stringify({ ...existing, user: userState }));
  },

  getUser: () => {
    const state = JSON.parse(sessionStorage.getItem('__app_state') || '{}');
    if (state.user?.data) {
      return JSON.parse(atob(state.user.data));
    }
    return null;
  },

  clearUser: () => {
    const state = JSON.parse(sessionStorage.getItem('__app_state') || '{}');
    delete state.user;
    sessionStorage.setItem('__app_state', JSON.stringify(state));
  },
};
export default StorageService;
