import React from 'react';
import styles from './Label.module.scss';

type Props = {
  name: string;
  children: React.ReactElement;
}

export const Label: React.FC<Props> = (props) => {
  return (
    <label htmlFor={props.name} className={styles.label}>
    <h4 className={styles.title}>{props.name}</h4>
    {props.children}
  </label>
  )
}
