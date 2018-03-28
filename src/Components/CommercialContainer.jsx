import React, { Component } from 'react';
import FilterTypes from './FilterTypes';
import Types from './Types';

class CommercialContainer extends Component {
  render() {
    return (
      <div className="commercialContainer">
        <h1 className="commercialContainer-header">Commercial Property - Add Field</h1>

        <div className="commercialContainer-content">
          <div className="row">
            <div className="fieldTypes col-md-3">
              <h4 className="fieldTypes-header">Field Types</h4>

              <FilterTypes />

              <Types
                className="text"
                label="Text"
                definition="String of text"
                defaultDisplay="Free-form text input"
              />

              <Types
                className="date"
                label="Date"
                definition="Standard ISO format date"
                defaultDisplay="Datepicker, with configurable format"
              />

              <Types
                className="vin"
                label="VIN"
                definition="Vehicle Identification Number"
                defaultDisplay="Free-form text input"
              />

              <Types
                className="number"
                label="Number"
                definition="Integar"
                defaultDisplay="Free-form integar input"
              />

              <Types
                className="currency"
                label="Currency"
                definition="Form of currency"
                defaultDisplay="Free-form currency input"
              />

              <Types
                className="select"
                label="Select"
                definition="Dropdown selection"
                defaultDisplay="Preset dropdown list"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommercialContainer;
