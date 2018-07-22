import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default withRouter(App);