import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom'

class About extends Component {
  render() {
      console.log("selam")
    return (
      <div>About</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushState: push
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(About))