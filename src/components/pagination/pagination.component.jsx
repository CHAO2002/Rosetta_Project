import React from 'react';
import { connect } from 'react-redux';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

import { setPageIndex } from '../../redux/repository/repository.actions';

import './pagination.styles.scss';

const Pagination = ({ incomplete, pageIndex, setPageIndex }) => {
  return (
    <div className="pagination-container">
      {
        pageIndex > 0 ?
          <KeyboardArrowLeftOutlinedIcon fontSize="large"
            onClick={() =>
              setPageIndex(pageIndex - 1)} />
          : null
      }
      <div className="page-string">
        <span>Page {pageIndex + 1} </span>
      </div>
      {
        incomplete ? null :
          <KeyboardArrowRightOutlinedIcon fontSize="large"
            onClick={() =>
              setPageIndex(pageIndex + 1)} />
      }
    </div>
  )
};

const mapStateToProps = state => ({
  incomplete: state.repository.repositories ? state.repository.repositories.incomplete_results : null,
  pageIndex: state.repository.pageIndex
});

const mapDispatchToProps = dispatch => ({
  setPageIndex: index => dispatch(setPageIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);