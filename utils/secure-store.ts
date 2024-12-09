import * as SecureStore from 'expo-secure-store';

/**
 * Store a string value securely.
 * @param name Key name for the value.
 * @param value String value to store.
 */
export const storeData = async (name: string, value: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(name, value);
  } catch (error) {
    console.error(`Error storing data with key "${name}":`, error);
  }
};

/**
 * Store a JSON object securely.
 * @param name Key name for the value.
 * @param value JSON object to store.
 */
export const storeJsonData = async (name: string, value: unknown): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(name, jsonValue);
  } catch (error) {
    console.error(`Error storing JSON data with key "${name}":`, error);
  }
};

/**
 * Retrieve a string value securely.
 * @param name Key name for the value.
 * @returns Retrieved string value or null if not found.
 */
export const getData = async (name: string): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(name);
  } catch (error) {
    console.error(`Error retrieving data with key "${name}":`, error);
    return null;
  }
};

/**
 * Retrieve a JSON object securely.
 * @param name Key name for the value.
 * @returns Retrieved JSON object or null if not found.
 */
export const getJsonData = async <T>(name: string): Promise<T | null> => {
  try {
    const jsonValue = await SecureStore.getItemAsync(name);
    return jsonValue ? (JSON.parse(jsonValue) as T) : null;
  } catch (error) {
    console.error(`Error retrieving JSON data with key "${name}":`, error);
    return null;
  }
};

/**
 * Remove a value securely.
 * @param name Key name for the value to remove.
 */
export const removeItem = async (name: string): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(name);
  } catch (error) {
    console.error(`Error removing data with key "${name}":`, error);
  }
};
