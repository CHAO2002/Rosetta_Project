import axios from 'axios';

import RepositoryActionTypes from './repository.types';

export const fetchRepositoryStart = () => ({
  type: RepositoryActionTypes.FETCH_REPOSITORY_START
});

export const fetchRepositorySuccess = data => ({
  type: RepositoryActionTypes.FETCH_REPOSITORY_SUCCESS,
  payload: data
});

export const fetchRepositoryFailure = error => ({
  type: RepositoryActionTypes.FETCH_REPOSITORY_FAILURE,
  payload: error
});

export const setNameSearch = input => ({
  type: RepositoryActionTypes.SET_NAME_SEARCH,
  payload: input
});

export const setLanguageSearch = input => ({
  type: RepositoryActionTypes.SET_LANGUAGE_SEARCH,
  payload: input
});

export const setSearchOrder = input => ({
  type: RepositoryActionTypes.SET_SEARCH_ORDER,
  payload: input
});

export const setPageIndex = index => ({
  type: RepositoryActionTypes.SET_PAGE_INDEX,
  payload: index
});

export const fetchRepositoriesStartAsync = () => {
  return async (dispatch, getState) => {
    const { repository } = getState();
    const { nameSearch, languageSearch, searchOrder, pageIndex } = repository;

    dispatch(fetchRepositoryStart());
    try {
      const jsonData = await axios.get('https://api.github.com/search/repositories', {
        headers: { authorization: "token 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" },
        params: {
          q: `${nameSearch}+language:${languageSearch}`,
          sort: "stars",
          order: searchOrder,
          page: pageIndex
        }
      });
      dispatch(fetchRepositorySuccess(jsonData.data));
    } catch (error) {
      dispatch(fetchRepositoryFailure(error.message));
    }
  };
};