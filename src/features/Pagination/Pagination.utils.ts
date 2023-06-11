import { MAX_SURROUNDING_PAGES } from './Pagination.constants';

const buildEmptyArray = (size: number) => new Array<number>(size).fill(0);

export const getSurroundingPages = (
  currentPage: number,
  totalPages: number
): number[] => {
  const arraySize = 2 * MAX_SURROUNDING_PAGES + 1;
  if (currentPage < MAX_SURROUNDING_PAGES + 1) {
    return buildEmptyArray(arraySize).map((_, i) => i + 1);
  }
  if (currentPage > totalPages - MAX_SURROUNDING_PAGES) {
    return buildEmptyArray(arraySize)
      .map((_, i) => totalPages - i)
      .reverse();
  }
  const startPage = currentPage - MAX_SURROUNDING_PAGES;
  return buildEmptyArray(arraySize).map((_, i) => startPage + i);
};
