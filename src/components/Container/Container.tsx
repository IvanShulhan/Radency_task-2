import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleIsVisible, changeMode } from '../../features/formSlice';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';
import './Container.scss';

export const Container = () => {
  const dispatch = useAppDispatch();
  const { isVisible } = useAppSelector(state => state.form);

  return (
    <div className="container app__container">
      {isVisible && (
        <span 
          className="container__mask"
          onClick={() => {
            dispatch(toggleIsVisible())
          }}
        />
      )}
      <div className="container__content">
        <Table tableType="notes"/>
        <button 
          type="button" 
          className="container__create-button"
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
