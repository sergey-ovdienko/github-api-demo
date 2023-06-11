import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchSlice } from '../SearchInput/SearchInput.reducer';
import { apiService } from '../Api/Api.service';
import { paginationSlice } from '../Pagination/Pagination.reducer';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [apiService.reducerPath]: apiService.reducer,
    pagination: paginationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);
