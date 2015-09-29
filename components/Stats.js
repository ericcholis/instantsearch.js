var React = require('react');

var Template = require('./Template');

class Stats extends React.Component {
  render() {
    var data = {
      hasManyResults: this.props.nbHits > 1,
      hasNoResults: this.props.nbHits === 0,
      hasOneResult: this.props.nbHits === 1,
      hitsPerPage: this.props.hitsPerPage,
      nbHits: this.props.nbHits,
      nbPages: this.props.nbPages,
      page: this.props.page,
      processingTimeMS: this.props.processingTimeMS,
      query: this.props.query
    };

    return (
      <this.props.Template data={data} templateKey="body" />
    );
  }
}

Stats.propTypes = {
  hitsPerPage: React.PropTypes.number,
  nbHits: React.PropTypes.number,
  nbPages: React.PropTypes.number,
  page: React.PropTypes.number,
  processingTimeMS: React.PropTypes.number,
  query: React.PropTypes.string
};

module.exports = Stats;
