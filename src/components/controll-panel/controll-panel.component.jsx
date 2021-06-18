import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { setNameSearch, setLanguageSearch, setSearchOrder } from '../../redux/repository/repository.actions';

import './controll-panel.styles.scss';

const ControllPanel = ({ setNameSearch, setLanguageSearch, setSearchOrder }) => {
  const handleNameInput = (event) => {
    setNameSearch(event.target.value);
  };

  const handleLanguageInput = (event) => {
    setLanguageSearch(event.target.value);
  };

  const handleOrderInput = (event) => {
    setSearchOrder(event.target.value);
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
      <div>
        <InputLabel htmlFor="outlined-native">Order</InputLabel>
        <Select
          native
          onChange={handleOrderInput}
          label="Order"
          inputProps={{
            name: 'order',
            id: 'outlined-native',
          }}
        >
          <option value="desc">DESC</option>
          <option value="asc">ASC</option>
        </Select>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setNameSearch: input => dispatch(setNameSearch(input)),
  setLanguageSearch: input => dispatch(setLanguageSearch(input)),
  setSearchOrder: input => dispatch(setSearchOrder(input))
});

export default connect(null, mapDispatchToProps)(ControllPanel);