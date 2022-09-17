import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { notes } from '../data/data';

export interface Note {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  isArchived: boolean;
}

export interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    toggleNoteToArchive: (state, action: PayloadAction<number>) => {
      const note = state.notes.find((note) => note.id === action.payload);

      if (note) {
        note.isArchived = !note.isArchived;
      }
    }
  },
});

export const { addNewNote, removeNote, toggleNoteToArchive } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default notesSlice.reducer;