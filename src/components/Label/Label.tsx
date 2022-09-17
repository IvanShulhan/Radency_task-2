import React from 'react';
import './Label.scss';

type Props = {
  name: string;
  children: React.ReactElement;
}

export const Label: React.FC<Props> = (props) => {
  return (
    <label htmlFor={props.name} className="label form__label">
    <h4 className="label__title">{props.name}</h4>
    {props.children}
  </label>
  )
}
