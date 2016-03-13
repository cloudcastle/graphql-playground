import React from 'react';
import Relay from 'react-relay';
import TrendSummary from './trend_summary';

class TrendsList extends React.Component {
  render() {
    const {summaries} = this.props.trendsList;

    return (
      <ul>
      { summaries.edges.map(summary => <TrendSummary trendSummary={summary.node} key={summary.node.id}/>)}
      </ul>
    );
  }
}

export default Relay.createContainer(TrendsList, {
  fragments: {
    trendsList: () => Relay.QL`
      fragment on TrendList {
        summaries(first: 2) {
          edges {
            node {
              ${TrendSummary.getFragment('trendSummary')}
            }
          }
        }
      }
    `
  }
});


