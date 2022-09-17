import React, { useMemo, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Note } from '../../features/notesSlice';
import { Row } from '../Row/Row';
import { TableHead } from '../TableHead/TableHead';

const notesTableHeadKeys = ['Name', 'Created', 'Category', 'Content', 'Dates'];
const statisticTableHeadKeys = ['Note category', 'Active', 'Archived'];

type Props = {
  tableType: string;
  callback?: () => void;
};

export type Statistic = {
  active: number;
  archived: number;
}

type Acc = {
  [key: string]: Statistic;
}

export const Table: React.FC<Props> = ({ tableType, callback }) => {
  const [isVisibleActiveNotes, setIsVisibleActiveNotes] = useState(false);
  const { notes } = useAppSelector(state => state.notes);

  const visibleNotes = useMemo(() => {
    return notes.filter((note) => {
      if (isVisibleActiveNotes) {
        return note.isArchived;
      }

      return !note.isArchived;
    })
  }, [isVisibleActiveNotes, notes]);

  const statistic = useMemo(() => {
    return notes.reduce((acc: Acc, note) => {
    const { category } = note;    

      if (!acc.hasOwnProperty(category)) {
        return Object.assign(acc, { [category]: {
            active: note.isArchived ? 0 : 1,
            archived: note.isArchived ? 1 : 0,
          }
        },)
      } else {
        note.isArchived
        ? acc[category].archived++
        : acc[category].active++
        
        return acc;
      }
    }, {})
  }, [notes])

  const setVisibility = () => {
    setIsVisibleActiveNotes(!isVisibleActiveNotes);
  }
  
  return (
    <table className="table container__table">
      <TableHead 
        keys={tableType === 'notes' ? notesTableHeadKeys : statisticTableHeadKeys} 
        type={tableType} 
        setVisibility={setVisibility} 
      />
      <tbody>
        {tableType === 'notes' ? (
          visibleNotes.map((note: Note) => (
          <React.Fragment key={note.id} >
            <Row note={note} callback={callback}/>
          </React.Fragment>
        ))) : (
          Object.entries(statistic).map((item) => (
            <React.Fragment key={item[0]} >
              <Row item={item} />
            </React.Fragment>
        )))}
      </tbody>
    </table>
  )
}
