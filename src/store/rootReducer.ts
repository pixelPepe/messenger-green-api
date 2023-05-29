import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './formSlice';

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
