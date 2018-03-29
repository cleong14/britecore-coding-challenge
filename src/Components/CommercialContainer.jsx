import React, { Component } from 'react';
import FilterTypes from './FieldTypes/FilterTypes';
import FieldDetails from './FieldDetails/FieldDetails';

class CommercialContainer extends Component {
  render() {
    return (
      <div className="commercialContainer">
        <h1 className="commercialContainer-header">Commercial Property - Add Field</h1>

        <div className="commercialContainer-content">
          <div className="row">
            <div className="col-md-3 fieldTypes">
              <h3 className="fieldTypes-header">Field Types</h3>

              <FilterTypes />
            </div>
            <div className="col-md-9 fieldDetails">
              <h3 className="fieldDetails-header">Field Details</h3>

              <FieldDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommercialContainer;
