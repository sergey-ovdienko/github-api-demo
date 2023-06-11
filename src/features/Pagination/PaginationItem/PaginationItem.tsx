import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import * as styles from './PaginationItem.module.css';

export const PaginationItem: FC<
  Omit<HTMLProps<HTMLButtonElement>, 'type' | 'onClick'> & {
    page: number;
    active?: boolean;
    onClick: (page: number) => void;
  }
> = ({ className, onClick, page, active, ...props }) => {
  return (
    <button
      type="button"
      className={classNames(styles.item, className, active && styles.active)}
      onClick={() => {
        onClick(page);
      }}
      {...props}
    />
  );
};
