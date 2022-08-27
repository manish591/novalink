import { useCallback, useRef } from 'react';

const useDebounce = (fn, delay) => {
  const timerId = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [delay, fn],
  );

  return debouncedFunction;
};

export { useDebounce };
