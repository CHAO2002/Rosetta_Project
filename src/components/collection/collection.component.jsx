import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './collection.styles.scss';

const Collection = ({ repositories }) => {
  return (
    <div className="collection-row">
      <TableContainer component={Paper}>
        <Table className="">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>URL</TableCell>
              <TableCell align="right">Stargazers</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories ? (repositories.items.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.language}</TableCell>
                <TableCell>{row.html_url}</TableCell>
                <TableCell align="right">{row.stargazers_count}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  repositories: state.repository.repositories
});

export default connect(mapStateToProps)(Collection);