import React from 'react';
import Relay from 'react-relay';

class TrendsList extends React.Component {
  render() {
    return <p> I am a Trends List </p>;
  }
}

export default Relay.createContainer(TrendsList, {
  fragments: {
    trendsList: () => Relay.QL`
      fragment on TrendList {
        summaries {
          name,
          description
        }
      }
    `
  }
});


