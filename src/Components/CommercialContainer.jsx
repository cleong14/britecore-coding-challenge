import React, { Component } from 'react';
import FilterTypes from './FilterTypes';

class CommercialContainer extends Component {
  render() {
    return (
      <div className="commercialContainer">
        <h1 className="commercialContainer-header">Commercial Property - Add Field</h1>

        <div className="commercialContainer-content">
          <div className="row">
            <div className="col-md-3 fieldTypes">
              <h4 className="fieldTypes-header">Field Types</h4>

              <FilterTypes />
            </div>
            <div className="col-md-6 fieldDetails">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommercialContainer;
