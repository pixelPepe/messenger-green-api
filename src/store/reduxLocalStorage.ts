const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  const state = store.getState();

  localStorage.setItem('reduxState', JSON.stringify(state));

  return result;
};

export default localStorageMiddleware;
