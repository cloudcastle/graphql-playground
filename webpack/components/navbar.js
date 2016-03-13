import React from 'react';
import Relay from 'react-relay';

class Navbar extends React.Component {
  render() {
    const {name, email} = this.props.user.profile;
    return (
      <div>
        <p>Name: {name}</p>
        <p>E-mail: {email}</p>
      </div>
    )
  }
}

export default Relay.createContainer(Navbar, {
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