import React, { Component } from 'react';
import FilterTypes from './FilterTypes';

class CommercialContainer extends Component {
  render() {
    return (
      <div className="commercial-container">
        <header className="commercial-container-header">
          <h1 className="commercial-container-title">Commercial Property - Add Field</h1>
        </header>

        <div className="commercial-content">
          <div className="row">
            <div className="field-types col-md-3">
              <h4 className="field-types-header">Field Types</h4>

              <FilterTypes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommercialContainer;
