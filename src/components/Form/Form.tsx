import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNewNote, editNote } from '../../features/notesSlice';
import { toggleIsVisible, defaultValue as clearForm } from '../../features/formSlice';

import { Label } from '../Label/Label';
import styles from './Form.module.scss';

type ButtonType = 'submit' | 'reset';
type EventType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const options = ['Task', 'Idea', 'Random thought', 'Quote'];

const getDates = (content: string) => {
  const reg = /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/g;
  return content.match(reg)?.join(', ')
};

const createButton = (type: ButtonType, callback: () => void) => (
  <button 
    type={type}
    className={classNames(
      styles.button, type === 'reset' ? styles.button_reset : styles.button_submit
    )}
    onClick={(event) => {
      event.preventDefault();
      callback();
    }}
  >
    {type}
  </button>
)

export const Form: React.FC = () => {
  const [formData, setFormData] = useState(clearForm);
  const [isVisibleErrMessage, setIsVisibleErrMessage] = useState(false);
  const { isVisible, defaultValue, mode } = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFormData(defaultValue);
  }, [defaultValue])

  const resetForm = () => {
    setFormData(clearForm);
  }

  const changeFormData = (
    event: React.ChangeEvent<EventType>, 
    key: string
  ) => {
    setFormData((curr) => ({
      ...curr,
      [key]: event.target.value,
    }))
  }

  const showErrorMessage = () => {
    setIsVisibleErrMessage(true);

    setTimeout(() => {
      setIsVisibleErrMessage(false);
    }, 2000)
  }

  const submitForm = () => {
    const { id, name, category, content } = formData;

    if(Object.values(formData).some(value => value.toString().length === 0)) {
      showErrorMessage();
      return;
    }

    if (mode === 'create') {
      const options = { month: 'long', year: 'numeric', day: '2-digit' } as const;
      const note = {
        id: Date.now(),
        name,
        created: new Date().toLocaleDateString('en-US', options),
        category,
        content,
        dates: getDates(content) || '',
        isArchived: false,
      }
  
      dispatch(addNewNote(note));
    } else {
      const dates = getDates(content) || '';
      dispatch(editNote({ id, name, category, content, dates }));
    }


    resetForm();
    dispatch(toggleIsVisible());
  };

  return (
    <form 
      className={classNames(
        styles.form,  {'flex': isVisible},
      )}
      id="form" 
      data-type="create"
    >
      {isVisibleErrMessage && (
        <h4 className={styles.errorMessage}>
          Please fill all fields
        </h4>)}
      <button 
        className={classNames(
          styles.cancelButton
        ) }
        onClick={() => {
          resetForm();
          dispatch(toggleIsVisible());
        }}
      />
      <h3 className={styles.title}>Create note form</h3>
      <Label name="name">
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Enter a title" 
          id="name"
          value={formData.name}
          required
          onChange={(event) => {
            changeFormData(event, 'name')
          }}
        />
      </Label>
      <Label name="category">
        <select 
          className={styles.input} 
          id="category" 
          value={formData.category}
          onChange={(event) => {
            changeFormData(event, 'category');
          }}
        >
          {options.map(option => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
      </Label>
      <Label name="content">
        <textarea 
          className={classNames(
            styles.input, 'resize-none', 'overflow-y-hidden'
          )} 
          placeholder="Enter a note content" 
          id="content" 
          required
          value={formData.content}
          onChange={(event) => {
            changeFormData(event, 'content');
          }}
        />
      </Label>
      <div className={styles.buttonBlock}>
        {createButton('reset', resetForm)}
        {createButton('submit', submitForm)}
      </div>
    </form>
  )
}
