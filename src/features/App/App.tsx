import React from 'react';
import { StoreProvider } from '../Store';
import { SearchInput } from '../SearchInput';
import { RepositoryList } from '../RepositoryList';
import * as styles from './App.module.css';
import { Pagination } from '../Pagination';

export const App = () => {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <SearchInput />
        <RepositoryList />
        <Pagination />
      </div>
    </StoreProvider>
  );
};
