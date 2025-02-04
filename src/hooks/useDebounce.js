import { useEffect, useState } from "react";

export const useDebounce = ({ value }) => {
  const [value1, setValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  },[value]);

  return value1;
};
