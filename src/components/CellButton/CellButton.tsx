import classNames from 'classnames';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeMode, setDefaultValue, toggleIsVisible } from '../../features/formSlice';
import { Note, removeNote, toggleNoteToArchive } from '../../features/notesSlice';
import styles from './CellButton.module.scss';
import cellStyles from '../../modules/Icon.module.scss';

type Props = {
  note: Note;
  type: string;
  identifier: string;
}

const createClassName = (value: string) => {
  switch (value) {
    case 'delete':
      return 'bg-delete';
    case 'archive':
      return 'bg-archive';
    case 'unarchive':
      return 'bg-unarchive';
    case 'edit':
      return 'bg-edit';
    default:
      break;
  }
}

export const CellButton: React.FC<Props> = ({ type, note, identifier }) => {
  const { id, name, category, content} = note;

  const dispatch = useAppDispatch();
  const editNote = () => {
    dispatch(setDefaultValue({id, name, category, content}));
    dispatch(changeMode('edit'));
    dispatch(toggleIsVisible());
  }

  return (
  <button 
    className={classNames(
        styles.cellButton,
        cellStyles.icon, 
        createClassName(identifier)
    )}
    type="button" 
    onClick={() => {
      switch(type) {
        case 'Delete':
          dispatch(removeNote(id));
          break;
        case 'Archive':
          dispatch(toggleNoteToArchive(id));
          break;
        case 'Edit':
          editNote()
          break;
        default: break;
      }
    }}
  >
    {type}
  </button>
)}