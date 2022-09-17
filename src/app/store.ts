import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/formSlice';
import notesReducer from '../features/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    form: formSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

