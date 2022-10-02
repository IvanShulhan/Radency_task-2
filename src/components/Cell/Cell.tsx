import classNames from 'classnames';
import React from 'react';
import styles from  './Cell.module.scss';

type Props = {
  children?: React.ReactElement;
  identifier?: string;
  content?: string;
} 

export const Cell: React.FC<Props> = (props) => {
  const { identifier, content } = props;

  return (
    <td className={classNames(
      styles.cell, 
      {
        'text-gray-700': identifier === 'isDarken',
        'min-w-[100px] w-max justify-end': identifier === 'withIcons',
        'justify-center': identifier === 'isCentered',
        'w-[210px]': identifier === 'isBig',
      }
      )}>
      {content || props.children}
    </td>
  )
}