import React from 'react';
import Relay from 'react-relay';
import TrendSummary from './trend_summary';

class TrendsList extends React.Component {
  render() {
    const {summaries} = this.props.trendsList;
    return (
      <ul>
      { summaries.map((summary) => <TrendSummary summary={summary} key={summary.id}/>)}
      </ul>
    );
  }
}

export default Relay.createContainer(TrendsList, {
  fragments: {
    trendsList: () => Relay.QL`
      fragment on TrendList {
        summaries {
          id
          name
          description
        }
      }
    `
  }
});


