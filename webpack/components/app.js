import React from 'react';
import Relay from 'react-relay';

import Navbar from './navbar';

class App extends React.Component {
  render() {
    const {user, trendsList} = this.props;
    return (
      <div>
        <Navbar user={user}/>
        <h1>I'm the main app</h1>

        {this.props.children}
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