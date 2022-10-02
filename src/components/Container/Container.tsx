import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleIsVisible, changeMode } from '../../features/formSlice';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';
import styles from './Container.module.scss';

export const Container = () => {
  const dispatch = useAppDispatch();
  const { isVisible } = useAppSelector(state => state.form);

  return (
    <div className={styles.body}>
      {isVisible && (
        <span 
          className={styles.mask}
          onClick={() => {
            dispatch(toggleIsVisible())
          }}
        />
      )}
      <div className={styles.content}>
        <Table tableType="notes"/>
        <button 
          type="button" 
          className={styles.createButton}
          onClick={() => {
            dispatch(changeMode('create'));
            dispatch(toggleIsVisible());
          }}
        >
          Create Note
        </button>
        <Table tableType="statistic"/>
        <Form/>
      </div>
    </div>
  )
}
