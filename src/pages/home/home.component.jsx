import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import Collection from '../../components/collection/collection.component';
import Pagination from '../../components/pagination/pagination.component';

import { fetchRepositoriesStartAsync } from '../../redux/repository/repository.actions';

import './home.styles.scss';

const HomePage = ({ fetchRepositoriesStartAsync, ...props }) => {
  const { isFetching, nameSearch, languageSearch, searchOrder, pageIndex } = props;

  useEffect(() => {
    fetchRepositoriesStartAsync();
  }, [fetchRepositoriesStartAsync, nameSearch, languageSearch, searchOrder, pageIndex]);

  return (
    <div>
      {
        isFetching ?
          <div className="loading-content">
            <CircularProgress />
          </div> :
          <div>
            <Pagination />
            <Collection />
          </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.repository.isFetching,
  nameSearch: state.repository.nameSearch,
  languageSearch: state.repository.languageSearch,
  searchOrder: state.repository.searchOrder,
  pageIndex: state.repository.pageIndex
});

const mapDispatchToProps = dispatch => ({
  fetchRepositoriesStartAsync: () => dispatch(fetchRepositoriesStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);