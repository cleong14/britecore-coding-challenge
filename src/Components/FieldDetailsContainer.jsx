import React, { Component } from 'react';

class FieldDetailsContainer extends Component {
  render() {
    return (
      <div className="FieldDetailsContainer">
        {this.props.children}
      </div>
    );
  }
}

export default FieldDetailsContainer;
