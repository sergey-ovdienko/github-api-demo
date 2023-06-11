export type ApiRepository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  watchers_count: number;
  stargazers_count: number;
};

export type SearchRepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: ApiRepository[];
};

export type SearchRepositoriesParams = {
  q: string;
  page: number;
};
