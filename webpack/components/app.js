import React from 'react';
import Relay from 'react-relay';

import Navbar from './navbar';

class App extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        <Navbar user={user}></Navbar>
        <h1>I'm the main app</h1>
      </div>
    )
  }
}

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        ${Navbar.getFragment('user')}
      }
    `
  }
});