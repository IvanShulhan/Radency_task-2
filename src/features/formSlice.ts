import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export type DefaultValue = {
  name: string;
  category: string;
  content: string;
}

export interface FormState {
  isVisible: boolean;
  defaultValue: DefaultValue;
}

export const defaultValue = {
  name: '',
  category: 'Task',
  content: '',
}

const initialState: FormState = {
  isVisible: false,
  defaultValue,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    setDefaultValue: (state, action: PayloadAction<DefaultValue>) => {
      state.defaultValue = action.payload;
    },
  },
});

export const { toggleIsVisible, setDefaultValue } = formSlice.actions;
export const selectDefaultValue = (state: RootState) => state.form;
export default formSlice.reducer;