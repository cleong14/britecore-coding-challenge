import React, { Component } from 'react';

class FieldsContainer extends Component {
  render() {
    return (
      <div className="FieldsContainer">
        {this.props.children}
      </div>
    );
  }
}

export default FieldsContainer;
