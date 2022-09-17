import classNames from 'classnames';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeNote, toggleNoteToArchive } from '../../features/notesSlice';
import './CellButton.scss';

type Props = {
  id: number;
  type: string;
  identifier: string;
}

export const CellButton: React.FC<Props> = ({ type, id, identifier }) => {
  const dispatch = useAppDispatch();

  return (
  <button 
    className={classNames(
        'cell-button', 'icon', 'cell__icon', `icon--${identifier}`,
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
        default: break;
      }
    }}
  >
    {type}
  </button>
)}