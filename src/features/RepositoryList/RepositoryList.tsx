import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchRepositoriesQuery } from '../Api/Api.hooks';
import { useDispatch, useSelector } from '../Store/Store.hooks';
import { selectQuery } from '../SearchInput/SearchInput.selectors';
import { DEBOUNCE_DELAY, DEFAULT_QUERY } from './RepositoryList.constants';
import { RepositoryItem } from './RepositoryItem';
import * as styles from './RepositoryList.module.css';
import { selectCurrentPage } from '../Pagination/Pagination.selectors';
import {
  setCurrentPage,
  setTotalPages,
} from '../Pagination/Pagination.actions';
import { PER_PAGE } from '../Api/Api.constants';

export const RepositoryList = () => {
  const query = useSelector(selectQuery);
  const currentPage = useSelector(selectCurrentPage);
  const [debouncedQuery] = useDebounce(query, DEBOUNCE_DELAY);

  const dispatch = useDispatch();

  const [prevQuery, setPrevQuery] = useState(debouncedQuery);

  useEffect(() => {
    setPrevQuery(debouncedQuery);
  }, [debouncedQuery]);

  const params = useMemo(() => {
    return {
      q: debouncedQuery || DEFAULT_QUERY,
      page: debouncedQuery !== prevQuery ? 1 : currentPage,
    };
  }, [debouncedQuery, prevQuery, currentPage]);

  useEffect(() => {
    dispatch(setCurrentPage(params.page));
  }, [dispatch, params.page]);

  const { data, isFetching, error } = useSearchRepositoriesQuery(params);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(setTotalPages(Math.ceil(data.total_count / PER_PAGE)));
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [data, dispatch]);

  if (isFetching) {
    return <div className={styles.empty}>Loading...</div>;
  }
  if (error) {
    return (
      <div className={styles.empty}>An error occurred while loading data</div>
    );
  }
  if (!data || !data.total_count) {
    return <div className={styles.empty}>No data</div>;
  }
  return (
    <div ref={listRef} className={styles.list}>
      {data.items.map((item) => (
        <RepositoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};
