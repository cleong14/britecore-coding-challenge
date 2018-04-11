import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class FieldsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLabel: this.props.appState.displayLabel,
      referenceName: this.props.appState.referenceName,
      defaultValue: this.props.appState.defaultValue,
      customValidation: this.props.appState.customValidation,
      renderFieldsArray: this.props.appState.renderFieldsArray
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('RECEIVE FIELDS NEXT PROPS', nextProps);
    // if(this.state.renderFieldsArray !== nextProps.appState.renderFieldsArray){
    //   console.log('DIFFERENT PROPS');
    // }
    // this.setState({
    //   displayLabel: nextProps.appState.displayLabel,
    //   referenceName: nextProps.appState.referenceName,
    //   defaultValue: nextProps.appState.defaultValue,
    //   customValidation: nextProps.appState.customValidation,
    //   renderFieldsArray: nextProps.appState.renderFieldsArray
    // });
    // console.log('STATE AFTER NEXTPROPS SET', this.state.defaultValue);
  }

  render() {
    console.log('FIELDS CONTAINER PROPS', this.props);
    console.log('FIELDS CONTAINER PROPS ARRAY', this.props.appState.renderFieldsArray);
    console.log('FIELDS CONTAINER STATE ARRAY', this.state.renderFieldsArray);
    console.log('FIELDS CONTAINER STATE', this.state);

    const fieldDisplayLabel = this.state.renderFieldsArray.map((field, i) => {
      console.log('LABEL INSIDE RENDER', field);
      return (
        <div key={i} className='col-md-3 fields'>
          <Button className='fieldButtons'>
            <Form.Field>
              <h5>{field.displayLabel}</h5><br/>
              <input defaultValue={field.defaultValue} />
            </Form.Field>
          </Button>
        </div>
      );
    });

    return (
      <div className="FieldsContainer">
        <Form>
          <div className='row'>
            {fieldDisplayLabel}
          </div>
        </Form>
      </div>
    );
  }
}

export default FieldsContainer;
