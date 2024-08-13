import { useState } from "react";

// Hook untuk mendapatkan, menyimpan, dan menghapus data di localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  // Ambil data dari localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(
        `Error getting localStorage item with key "${key}":`,
        error
      );
      return initialValue;
    }
  });

  // Fungsi untuk menyimpan data ke localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(
        `Error setting localStorage item with key "${key}":`,
        error
      );
    }
  };

  // Fungsi untuk menghapus data dari localStorage
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue); // Reset state ke nilai awal
    } catch (error) {
      console.error(
        `Error removing localStorage item with key "${key}":`,
        error
      );
    }
  };

  return [storedValue, setValue, removeItem] as const;
}

export default useLocalStorage;
