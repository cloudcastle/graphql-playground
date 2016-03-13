import React from 'react';
import Relay from 'react-relay';

class TrendSummary extends React.Component {
  render() {
    const {name} = this.props.summary;
    return <li>Trend Summary: {name}</li>
  }
}

export default TrendSummary;
