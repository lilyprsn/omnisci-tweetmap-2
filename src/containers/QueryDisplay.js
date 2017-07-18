import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {removeFilter} from "../thunks/search"

class QueryDisplay extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    queryTerms: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  removeQuery (query) {
    this.props.dispatch(removeFilter(query))
  }

  render () {
    const queries = this.props.queryTerms.map(query =>
      <div
        className="queryPill"
        key={query}
        onClick={() => { this.removeQuery(query) }}
      >
        {query}
        <span className="delete"> &times;</span>
      </div>
    )

    if (queries.length === 0) {
      return null
    }

    return (
      <div id="queryDisplay">
        {queries}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {queryTerms: state.queryTerms}
}

export default connect(mapStateToProps)(QueryDisplay)
