import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  idInstance: string;
  apiTokenInstance: string;
}

const initialState: FormState = {
  idInstance: '',
  apiTokenInstance: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setIdInstance: (state, action: PayloadAction<string>) => {
      state.idInstance = action.payload;
    },
    setApiTokenInstance: (state, action: PayloadAction<string>) => {
      state.apiTokenInstance = action.payload;
    },
  },
});

export const { setIdInstance, setApiTokenInstance } = formSlice.actions;

export default formSlice.reducer;
