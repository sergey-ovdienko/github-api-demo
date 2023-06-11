import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PER_PAGE } from './Api.constants';
import {
  SearchRepositoriesParams,
  SearchRepositoriesResponse,
} from './Api.types';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    searchRepositories: builder.query<
      SearchRepositoriesResponse,
      SearchRepositoriesParams
    >({
      query: ({ q, page }) => {
        return `search/repositories?q=${q}&per_page=${PER_PAGE}&page=${page}`;
      },
    }),
  }),
});
