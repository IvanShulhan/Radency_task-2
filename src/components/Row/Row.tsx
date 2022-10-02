/* eslint-disable react/style-prop-object */
import classNames from 'classnames';
import React from 'react';
import { Note } from '../../features/notesSlice';
import { Cell } from '../Cell/Cell';
import { CellButton } from '../CellButton/CellButton';
import { Statistic } from '../Table/Table';
import iconStyles from '../../modules/Icon.module.scss';
import cellStyles from '../Cell/Cell.module.scss';
import styles from './Row.module.scss';

type Props = {
  note?: Note;
  item?: [string, Statistic]; 
};

const createClassName = (val: string) => {
  switch (val) {
    case 'Task':
      return 'bg-task';
    case 'Idea':
      return 'bg-idea';
    case 'Quote':
      return 'bg-quote';
    default: return 'bg-random';
  }
}

export const Row: React.FC<Props> = ({ note, item }) => {
  console.log(note?.category);
  
  return (
    <tr className={styles.row}>
      {note && (
        <>
          <Cell identifier="isDarken">
            <>
              <span className={iconStyles.iconWrapper}>
                <span className={classNames(
                  iconStyles.icon, 
                  createClassName(note.category)
                )}>
                  {note.category}
                </span>
              </span>
              <h3 className={cellStyles.title}>
                {note.name}
              </h3>
            </>      
          </Cell>
          <Cell content={note.created} />
          <Cell content={note.category} />
          <Cell>
            <p className={cellStyles.title}>
              {note.content}
            </p>
          </Cell>
          <Cell content={note.dates} />
          <Cell identifier="withIcons">
            <>
              <CellButton 
                type="Edit" 
                note={note} 
                identifier="edit"
              />
              <CellButton 
                type="Archive" 
                note={note} 
                identifier={!note.isArchived ? "archive" : "unarchive"}
              />
              <CellButton 
                type="Delete" 
                note={note} 
                identifier="delete"
              />
            </>
          </Cell>
        </>
      )}
      {item && (
        <>
          <Cell identifier="isDarken">
            <>
              <span className={iconStyles.iconWrapper}>
                <span className={classNames(
                  iconStyles.icon, 
                  createClassName(item[0])
                  // [`bg-${item[0].toLowerCase()}`]
                )}>
                  {item[0]}
                </span>
              </span>
              <h3 className={classNames(cellStyles.title, cellStyles.title_isVisible)}>
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
