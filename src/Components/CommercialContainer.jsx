import React, { Component } from 'react';

class CommercialContainer extends Component {
  render() {
    return (
      <div className="CommercialContainer">
        {this.props.children}
      </div>
    );
  }
}

export default CommercialContainer;
