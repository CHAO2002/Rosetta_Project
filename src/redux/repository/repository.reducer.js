import RepositoryActionTypes from './repository.types';

const INITIAL_STATE = {
  isFetching: false,
  repositories: null,
  nameSearch: "",
  languageSearch: "",
  errorMsg: undefined
};

const repositoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoryActionTypes.FETCH_REPOSITORY_START:
      return {
        ...state,
        isFetching: true
      };
    case RepositoryActionTypes.FETCH_REPOSITORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        repositories: action.payload
      };
    case RepositoryActionTypes.FETCH_REPOSITORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };
    case RepositoryActionTypes.SET_NAME_SEARCH:
      return {
        ...state,
        nameSearch: action.payload
      };
    case RepositoryActionTypes.SET_LANGUAGE_SEARCH:
      return {
        ...state,
        languageSearch: action.payload
      };
    default:
      return state;
  }
}

export default repositoryReducer;