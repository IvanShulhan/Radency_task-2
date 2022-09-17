/* eslint-disable react/style-prop-object */
import classNames from 'classnames';
import React from 'react';
import { Note } from '../../features/notesSlice';
import { Cell } from '../Cell/Cell';
import { CellButton } from '../CellButton/CellButton';
import { Statistic } from '../Table/Table';
import './Row.scss';

type Props = {
  note?: Note;
  item?: [string, Statistic]; 
  callback?: ( ) => void;
};

export const Row: React.FC<Props> = ({ note, item }) => {
  return (
    <tr className="row notes-table__row">
      {note && (
        <>
          <Cell identifier="is-darken">
            <>
              <span className="icon-wrapper cell__icon-wrapper">
                <span className={`icon icon--${note.category.toLowerCase()}`}>
                  {note.category}
                </span>
              </span>
              <h3 className="cell__title">
                {note.name}
              </h3>
            </>      
          </Cell>
          <Cell content={note.created} />
          <Cell content={note.category} />
          <Cell>
            <p className="cell__text">
              {note.content}
            </p>
          </Cell>
          <Cell content={note.dates} />
          <Cell identifier="with-icons">
            <>
              <CellButton 
                type="Edit" 
                id={note.id} 
                identifier="edit"
              />
              <CellButton 
                type="Archive" 
                id={note.id} 
                identifier={!note.isArchived ? "archive" : "unarchive"}
              />
              <CellButton 
                type="Delete" 
                id={note.id} 
                identifier="delete"
              />
            </>
          </Cell>
        </>
      )}
      {item && (
        <>
          <Cell identifier="is-darken">
            <>
              <span className="icon-wrapper cell__icon-wrapper">
                <span className={classNames(
                  'icon', [`icon--${item[0].toLowerCase()}`]
                )}>
                  {item[0]}
                </span>
              </span>
              <h3 className="cell__title">
                {item[0]}
              </h3>
            </>      
          </Cell>
          <Cell content={item[1].active.toString()} />
          <Cell content={item[1].archived.toString()} />
          <td/>
        </>
      )}
      
    </tr>
  )
}
