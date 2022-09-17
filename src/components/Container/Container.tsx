import { useState } from 'react';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';
import './Container.scss';

export const Container = () => {
  const [isVisibleFofm, setIsVisibleFofm] = useState(false);

  const changeIsVisibleFofm = () => {
    setIsVisibleFofm(!isVisibleFofm)
  }

  return (
    <div className="container app__container">
      {isVisibleFofm && (
        <span 
          className="container__mask"
          onClick={changeIsVisibleFofm}
        />
      )}
      <div className="container__content">
        <Table 
          tableType="notes" 
          callback={changeIsVisibleFofm}
        />
        <button 
          type="button" 
          className="container__create-button"
          onClick={changeIsVisibleFofm}
        >
          Create Note
        </button>
        <Table tableType="statistic"/>
        <Form 
          isVisible={isVisibleFofm} 
          changeIsVisibleFofm={changeIsVisibleFofm}
        />
      </div>
    </div>
  )
}
