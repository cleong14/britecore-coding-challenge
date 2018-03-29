import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class FieldDetails extends Component {
  state = {
    displayLabel: [],
    referenceName: [],
    defaultValue: [],
    customValidation: []
  }

  handleLabelBlur = (e) => {
    console.log('EVENT', e.target.value);
    if(!this.state.displayLabel.length){
      this.state.displayLabel.push(e.target.value);
    }

    if(!this.state.displayLabel.includes(e.target.value)){
      this.state.displayLabel.push(e.target.value);
    }
    console.log('STATE AFTER LABEL PUSH', this.state);
  }

  handleReferenceBlur = (e) => {
    console.log('EVENT', e.target.value);
    if(!this.state.referenceName.length){
      this.state.referenceName.push(e.target.value);
    }

    if(!this.state.referenceName.includes(e.target.value)){
      this.state.referenceName.push(e.target.value);
    }
    console.log('STATE AFTER REFERENCE PUSH', this.state);
  }

  handleDefaultBlur = (e) => {
    console.log('EVENT', e.target.value);
    if(!this.state.defaultValue.length){
      this.state.defaultValue.push(e.target.value);
    }

    if(!this.state.defaultValue.includes(e.target.value)){
      this.state.defaultValue.push(e.target.value);
    }
    console.log('STATE AFTER DEFAULT PUSH', this.state);
  }

  handleCustomBlur = (e) => {
    console.log('EVENT', e.target.value);
    if(!this.state.customValidation.length){
      this.state.customValidation.push(e.target.value);
    }

    if(!this.state.customValidation.includes(e.target.value)){
      this.state.customValidation.push(e.target.value);
    }
    console.log('STATE AFTER CUSTOM PUSH', this.state);
  }

  render() {
    console.log('FIELD DETAILS STATE', this.state);
    return (
      <div className="fieldDetails">
        <Form>
          <div className="row">
            <div className="col-md-3 fieldDetails-left">
              <Form.Field>
                <label>Display Label</label>
                <input onBlur={this.handleLabelBlur} />
              </Form.Field>
              <h6 className="definition">For display purposes, spaces allowed</h6>
            </div>
            <div className="col-md-3 fieldDetails-right">
              <Form.Field>
                <label>Reference Name</label>
                <input onBlur={this.handleReferenceBlur} />
              </Form.Field>
              <h6 className="definition">Used to reference in calculations, no spaces allowed</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fieldDetails-left">
              <Form.Field>
                <label>Default Value</label>
                <input onBlur={this.handleDefaultBlur} />
              </Form.Field>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fieldDetails-left">
              <Form.Field>
                <label>Custom Validation</label>
                <input onBlur={this.handleCustomBlur} />
              </Form.Field>
              <h6 className="definition">Any regex pattern can be used for custom input validation</h6>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default FieldDetails;
