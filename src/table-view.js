import React, { Component } from 'react';
import { Table } from 'evergreen-ui';

class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {id: 1, name: 'leo', lastActivity: 'yesterday', ltv: 4},
        {id: 2, name: 'lore', lastActivity: 'yesterday', ltv: 4},
        {id: 3, name: 'jow', lastActivity: 'today', ltv: 6},
        {id: 4, name: 'ran', lastActivity: 'yesterday', ltv: 3},
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/movies', { mode: 'no-cors'})
      .then(res => console.log(res));
  }

  render() {
    return (
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>
            Last Activity
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            ltv
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {this.state.movies.map(movie => (
            <Table.Row key={movie.id} isSelectable onSelect={() => alert(movie.name)}>
              <Table.TextCell>{movie.name}</Table.TextCell>
              <Table.TextCell>{movie.lastActivity}</Table.TextCell>
              <Table.TextCell isNumber>
                {movie.ltv}
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default TableView;