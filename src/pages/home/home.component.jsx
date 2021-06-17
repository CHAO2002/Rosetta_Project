import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ControllPanel from '../../components/controll-panel/controll-panel.component';
import Collection from '../../components/collection/collection.component';
import { Spin } from 'antd';
import 'antd/es/spin/style/css';

import { fetchRepositoriesStartAsync } from '../../redux/repository/repository.actions';

import './home.styles.scss';

const HomePage = ({ isFetching, nameSearch, languageSearch, fetchRepositoriesStartAsync, ...props }) => {
  useEffect(() => {
    fetchRepositoriesStartAsync();
  }, [fetchRepositoriesStartAsync, nameSearch, languageSearch]);

  return (
    <div>
      <ControllPanel></ControllPanel>
      {
        isFetching ? <Spin /> : <Collection />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.repository.isFetching,
  nameSearch: state.repository.nameSearch,
  languageSearch: state.repository.languageSearch
});

const mapDispatchToProps = dispatch => ({
  fetchRepositoriesStartAsync: () => dispatch(fetchRepositoriesStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);