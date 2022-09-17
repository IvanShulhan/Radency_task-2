import './TableHead.scss';

type Props = {
  type: string;
  keys: string[];
  setVisibility: () => void;
}

export const TableHead: React.FC<Props> = (
  { type, keys, setVisibility }
) => {
  return (
    <thead>
      <tr className="notes-table__head">
        {keys.map((key) => (
        <th 
          className={'cell notes-table__cell'}
          key={key}
        >
          {key}
        </th>
        ))}
        {type === 'notes' ? (
          <th className="cell notes-table__cell cell--with-icons">
          <button 
            className="icon cell__icon icon--is-big icon--archive-white" 
            onClick={setVisibility}
          >
            Arcive
          </button>
          <span 
            className="icon nocell__icon icon--is-big icon--delete-white"
          >
            Delete
          </span>
        </th>
      ) : (<th/>)}
      </tr>
    </thead>
  )
}
