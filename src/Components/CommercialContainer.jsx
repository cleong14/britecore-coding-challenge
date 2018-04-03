import React, { Component } from 'react';
import FieldDetails from './FieldDetails/FieldDetails';

class CommercialContainer extends Component {
  render() {
    // console.log('COMMERCIAL CONTAINER STATE', this.state)
    // console.log('CONTAINER CHILDREN PROPS', this.props);
    return (
      <div className="commercialContainer">
        {/*
            <div className="col-md-9 fieldDetails">
              <h3 className="fieldDetails-header">Field Details</h3>

              <FieldDetails />
            </div>
          </div>
        </div> */}
        {this.props.children}
      </div>
    );
  }
}

export default CommercialContainer;
