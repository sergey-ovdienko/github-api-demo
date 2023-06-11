import React, { FC } from 'react';
import { TextInput } from '../TextInput';
import { useDispatch, useSelector } from '../Store/Store.hooks';
import { updateQuery } from './SearchInput.actions';
import { selectQuery } from './SearchInput.selectors';

export const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  return (
    <TextInput
      placeholder="Search..."
      value={query}
      onInput={(e) => {
        if (!(e.target instanceof HTMLInputElement)) {
          return;
        }
        dispatch(updateQuery(e.target.value));
      }}
    />
  );
};
