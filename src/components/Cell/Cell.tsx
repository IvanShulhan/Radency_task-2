import classNames from 'classnames';
import React from 'react';
import './Cell.scss';

type Props = {
  children?: React.ReactElement;
  identifier?: string;
  content?: string;
} 

export const Cell: React.FC<Props> = (props) => {
  const { identifier, content } = props;

  return (
    <td className={classNames(
      'cell', 'note__cell', {[`cell--${identifier}`]: identifier}
    )}>
      {content || props.children}
    </td>
  )
}