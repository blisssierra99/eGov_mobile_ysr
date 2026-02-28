/**
 * Storage utility - Handles secure local data storage
 */

const STORAGE_KEYS = {
  AUTH_TOKEN: '@egov_auth_token',
  USER_PROFILE: '@egov_user_profile',
  LANGUAGE: '@egov_language',
};

/**
 * A simple storage abstraction. In a real app, use react-native-async-storage
 * or react-native-keychain for sensitive data.
 */
const storage = {
  _store: {},

  setItem: async (key, value) => {
    storage._store[key] = value;
  },

  getItem: async key => {
    return storage._store[key] || null;
  },

  removeItem: async key => {
    delete storage._store[key];
  },

  clear: async () => {
    storage._store = {};
  },
};

export const saveAuthToken = async token => {
  await storage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
};

export const getAuthToken = async () => {
  return storage.getItem(STORAGE_KEYS.AUTH_TOKEN);
};

export const clearAuthToken = async () => {
  await storage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
};

export const saveUserProfile = async profile => {
  await storage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};

export const getUserProfile = async () => {
  const data = await storage.getItem(STORAGE_KEYS.USER_PROFILE);
  return data ? JSON.parse(data) : null;
};

export const clearUserData = async () => {
  await storage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  await storage.removeItem(STORAGE_KEYS.USER_PROFILE);
};

export {STORAGE_KEYS};
