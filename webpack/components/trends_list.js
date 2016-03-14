import React from 'react';
import Relay from 'react-relay';
import TrendSummary from './trend_summary';

class TrendsList extends React.Component {
  render() {
    return <ul>{this._renderSummaries()}</ul>
  }

  _renderSummaries() {
    return this.props.trendsList.summaries.edges.map(edge => {
      const summary = edge.node;
      // TODO: how can we avoid touching __dataID__?
      return <TrendSummary trendSummary={summary} key={summary.__dataID__}/>;
    });
  }
}

export default Relay.createContainer(TrendsList, {
  fragments: {
    trendsList: () => Relay.QL`
      fragment on TrendsList {
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


