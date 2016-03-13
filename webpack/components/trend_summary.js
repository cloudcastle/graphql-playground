import React from 'react';
import Relay from 'react-relay';

class TrendSummary extends React.Component {
  render() {
    const {name} = this.props.trendSummary;
    return <li>Trend Summary: {name}</li>
  }
}

export default Relay.createContainer(TrendSummary, {
  fragments: {
    trendSummary: () => Relay.QL`
      fragment on TrendSummary {
        id
        name
      }
    `
  }
});


