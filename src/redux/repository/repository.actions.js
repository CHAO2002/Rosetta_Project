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

export const setNameSearch = text => ({
  type: RepositoryActionTypes.SET_NAME_SEARCH,
  payload: text
});

export const setLanguageSearch = text => ({
  type: RepositoryActionTypes.SET_LANGUAGE_SEARCH,
  payload: text
});

export const fetchRepositoriesStartAsync = () => {
  return async (dispatch, getState) => {
    const { repository } = getState();
    const { nameSearch, languageSearch } = repository;

    dispatch(fetchRepositoryStart());
    try {
      const jsonData = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: `${nameSearch}+language:${languageSearch}`,
          sort: "stars",
          order: "desc"
        }
      });
      dispatch(fetchRepositorySuccess(jsonData.data));
    } catch (error) {
      dispatch(fetchRepositoryFailure(error.message));
    }
  };
};