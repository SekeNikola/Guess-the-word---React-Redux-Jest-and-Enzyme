import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Input);
