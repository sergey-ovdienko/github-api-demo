import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import * as styles from './TextInput.module.css';

export const TextInput: FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={classNames(styles.textInput, className)}
      {...props}
    />
  );
};
