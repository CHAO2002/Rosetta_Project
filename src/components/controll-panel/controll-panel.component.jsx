import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { setNameSearch, setLanguageSearch } from '../../redux/repository/repository.actions';

import './controll-panel.styles.scss';

const ControllPanel = ({ setNameSearch, setLanguageSearch }) => {
  const handleNameInput = (event) => {
    setNameSearch(event.target.value);
  };

  const handleLanguageInput = (event) => {
    setLanguageSearch(event.target.value);
  };

  return (
    <div className="controll-panel">
      <TextField
        label="Name Search"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleNameInput}
      />
      <TextField
        label="Language Search"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleLanguageInput}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setNameSearch: text => dispatch(setNameSearch(text)),
  setLanguageSearch: text => dispatch(setLanguageSearch(text))
});

export default connect(null, mapDispatchToProps)(ControllPanel);