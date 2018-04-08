import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class FieldsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLabel: this.props.appState.displayLabel,
      referenceName: this.props.appState.referenceName,
      defaultValue: this.props.appState.defaultValue,
      customValidation: this.props.appState.customValidation
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('RECEIVE FIELDS NEXT PROPS', nextProps);
    // if(this.state.renderFieldsArray !== nextProps.appState.renderFieldsArray){
    //   console.log('DIFFERENT PROPS');
    // }
  }

  render() {
    console.log('FIELDS CONTAINER PROPS', this.props);
    console.log('FIELDS CONTAINER STATE', this.state);
    return (
      <div className="FieldsContainer">
        <Form>
          <Form.Field>
            <label>{this.props.appState.displayLabel}</label>
            <input value={this.props.appState.defaultValue} />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default FieldsContainer;
