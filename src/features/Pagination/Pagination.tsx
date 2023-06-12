import React, { ReactNode, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from '../Store/Store.hooks';
import { selectCurrentPage, selectTotalPages } from './Pagination.selectors';
import * as styles from './Pagination.module.css';
import { PaginationItem } from './PaginationItem';
import { setCurrentPage } from './Pagination.actions';
import { getSurroundingPages } from './Pagination.utils';

export const Pagination = () => {
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  const handleClick = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const content = useMemo(() => {
    if (totalPages <= 1) {
      return [];
    }
    const links: ReactNode[] = [];
    links.push(
      <PaginationItem
        key="prev"
        page={currentPage - 1}
        onClick={handleClick}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationItem>
    );
    const surroundingPages = getSurroundingPages(currentPage, totalPages);
    if (surroundingPages[0] > 1) {
      links.push(<span key="startgap">...</span>);
    }
    links.push(
      ...surroundingPages.map((pageNumber) => (
        <PaginationItem
          key={pageNumber}
          page={pageNumber}
          onClick={handleClick}
          active={currentPage === pageNumber}
        >
          {pageNumber}
        </PaginationItem>
      ))
    );
    if (surroundingPages[surroundingPages.length - 1] < totalPages) {
      links.push(<span key="endgap">...</span>);
    }
    links.push(
      <PaginationItem
        key="next"
        page={currentPage + 1}
        onClick={handleClick}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationItem>
    );
    return links;
  }, [currentPage, totalPages, handleClick]);

  if (totalPages <= 1) {
    return null;
  }

  return <div className={styles.pagination}>{content}</div>;
};
