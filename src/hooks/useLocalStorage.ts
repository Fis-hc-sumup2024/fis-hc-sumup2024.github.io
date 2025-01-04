/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

export default function useLocalStorage<ValueType>(
  key: string,
  defaultValue: ValueType
): [ValueType | string, (newValue: ValueType) => void] {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : storedValue;
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: any) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
