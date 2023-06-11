import { AppState } from '../Store/Store.types';

export const selectQuery = (state: AppState) => state.search.query;
