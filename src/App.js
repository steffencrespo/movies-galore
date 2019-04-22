import React, { Component } from 'react';
import './App.css';
import TableView from './table-view';
import { Pane, Heading, SearchInput } from 'evergreen-ui'

class App extends Component {
  render() {
    return (
      <Pane>
        <Pane display='flex' padding={16} borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Find your movie...</Heading>
          </Pane>
          <Pane>
            <SearchInput marginRight={16}>
            </SearchInput>
          </Pane>
        </Pane>
        <Pane>
          <TableView/>
        </Pane>
      </Pane>
    );
  }
}

export default App;
