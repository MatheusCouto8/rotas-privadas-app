import AsyncStorage from '@react-native-async-storage/async-storage';

// Chaves para armazenamento
const STORAGE_KEYS = {
  USER: '@user',
  TOKEN: '@token',
  SETTINGS: '@settings',
};

// Helpers para AsyncStorage
export const storage = {
  // Salvar dados
  async setItem(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error(`Erro ao salvar ${key}:`, error);
      return false;
    }
  },

  // Recuperar dados
  async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Erro ao recuperar ${key}:`, error);
      return null;
    }
  },

  // Remover item específico
  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Erro ao remover ${key}:`, error);
      return false;
    }
  },

  // Limpar todo o storage
  async clear() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Erro ao limpar storage:', error);
      return false;
    }
  },

  // Verificar se uma chave existe
  async hasItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (error) {
      console.error(`Erro ao verificar ${key}:`, error);
      return false;
    }
  },

  // Obter todas as chaves
  async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Erro ao obter chaves:', error);
      return [];
    }
  },

  // Métodos específicos para o app
  user: {
    async save(userData) {
      return await storage.setItem(STORAGE_KEYS.USER, userData);
    },
    async get() {
      return await storage.getItem(STORAGE_KEYS.USER);
    },
    async remove() {
      return await storage.removeItem(STORAGE_KEYS.USER);
    },
  },

  token: {
    async save(token) {
      return await storage.setItem(STORAGE_KEYS.TOKEN, token);
    },
    async get() {
      return await storage.getItem(STORAGE_KEYS.TOKEN);
    },
    async remove() {
      return await storage.removeItem(STORAGE_KEYS.TOKEN);
    },
  },

  settings: {
    async save(settings) {
      return await storage.setItem(STORAGE_KEYS.SETTINGS, settings);
    },
    async get() {
      return await storage.getItem(STORAGE_KEYS.SETTINGS);
    },
    async remove() {
      return await storage.removeItem(STORAGE_KEYS.SETTINGS);
    },
  },
};

export { STORAGE_KEYS };