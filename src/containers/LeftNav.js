import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Octicon from 'react-octicon'

class LeftNav extends React.Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <a><Octicon name="three-bars"
          mega
          onClick={() => { this.props.toggle() }}/></a>

        <div id="sideNav" className="nav flex-column" onHover={() => {alert('zomg')}}>
          <a>
            <Octicon name="location"
              mega
              data-toggle="tooltip"
              data-placement="right"
              title="Search Location"/>
          </a>

          <a>
            <Octicon name="globe"
              mega
              data-toggle="tooltip"
              data-placement="right"
              title="Zoom to World"/>
          </a>

          <a>
            <Octicon name="info"
              mega
              data-toggle="tooltip"
              data-placement="right"
              title="Learn More about MapD"/>
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(LeftNav)
