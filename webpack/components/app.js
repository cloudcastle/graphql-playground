import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    const {name, email} = this.props.user.profile;
    return (
      <div>
        <h1>I'm the main app</h1>
        <p>Name: {name}</p>
        <p>E-mail: {email}</p>
      </div>
    )
  }
}

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        profile {
          name,
          email
        }
      }
    `
  }
});