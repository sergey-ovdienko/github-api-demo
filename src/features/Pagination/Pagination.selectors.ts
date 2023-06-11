import { AppState } from '../Store/Store.types';

export const selectCurrentPage = (state: AppState) =>
  state.pagination.currentPage;

export const selectTotalPages = (state: AppState) =>
  state.pagination.totalPages;
