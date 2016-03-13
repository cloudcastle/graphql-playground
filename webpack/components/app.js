import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        I'm the main app!
      </div>
    )
  }
}

module.exports = Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
      }
    `
  }
});