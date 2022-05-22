const useGetLocalStorage = (key, initialValue) => {
  try {
    const itemToFind = window.localStorage.getItem(key);
    return itemToFind ? JSON.parse(itemToFind) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

export { useGetLocalStorage };
