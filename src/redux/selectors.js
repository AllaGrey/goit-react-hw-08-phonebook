export const selectUser = state => state.auth.user

export const getStatusIsLoggedIn = state => state.auth.isLoggedIn;

export const getStatusIsRefreshing = state => state.auth.isRefreshing;

export const getToken = state => state.auth.token;

export const getStatusFilter = state => state.filter;

export const getIsLoading = state => state.isLoading;

export const getError = state => state.contacts.error;

export const getContacts = state => state.contacts.items;





