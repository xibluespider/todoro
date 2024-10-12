import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };
  const [value, setValue] = useState(getStoredValue);

  const setValueInLocalStorageEffect = () => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(setValueInLocalStorageEffect, [key, value]);
  return [value, setValue];
}
