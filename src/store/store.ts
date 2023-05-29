import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import localStorageMiddleware from './reduxLocalStorage';

const savedState = localStorage.getItem('reduxState');
const initialState = savedState ? JSON.parse(savedState) : {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(localStorageMiddleware)
);
