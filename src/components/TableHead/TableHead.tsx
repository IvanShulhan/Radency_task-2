import styles from './TableHead.module.scss';
import cellStyles from '../Cell/Cell.module.scss';
import iconStyles from '../../modules/Icon.module.scss';
import classNames from 'classnames';

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
      <tr className={styles.tableHead}>
        {keys.map((key) => (
        <th 
          className={cellStyles.cell}
          key={key}
        >
          {key}
        </th>
        ))}
        {type === 'notes' ? (
          <th className={classNames(
            cellStyles.cell, 'min-w-[100px] w-max justify-end',
          )}>
          <button 
            className={classNames(
              iconStyles.icon, iconStyles.icon_isBig, 'bg-archiveWhite cursor-pointer'
            )} 
            onClick={setVisibility}
          >
            Arcive
          </button>
          <span 
            className={classNames(
              iconStyles.icon, iconStyles.icon_isBig, 'bg-deleteWhite'
            )}
          >
            Delete
          </span>
        </th>
      ) : (<th/>)}
      </tr>
    </thead>
  )
}
