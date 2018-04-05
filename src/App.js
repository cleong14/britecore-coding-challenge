import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import CommercialContainer from './Components/CommercialContainer';
import FieldsContainer from './Components/FieldsContainer';
import AddFieldModal from './Components/Modals/AddFieldModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [
        {
          buttonClassName: 'textButton',
          buttonOnClick: this.handleTextClick,
          className: 'text',
          label: 'Text',
          definition: 'String of text',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'dateButton',
          buttonOnClick: this.handleDateClick,
          className: 'date',
          label: 'Date',
          definition: 'Standard ISO format date',
          defaultDisplay: 'Datepicker, with configurable format'
        },
        {
          buttonClassName: 'vinButton',
          buttonOnClick: this.handleVinClick,
          className: 'vin',
          label: 'VIN',
          definition: 'Vehicle Identification Number',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        }
      ],
      buttonActive: false
    }
  }

  handleTextClick = (e, data) => {
    console.log('ON CLICK TEXT DATA', data);
    console.log('TEXT CHILDREN PROPS', data.children.props);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){
        console.log('EACH ITEM IN ARRAY', this.state.types[i]);

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('TEXT IS THE ACTIVE ITEM', this.state.types[i]);
          let resetActiveTypesArray = [
            {
              buttonClassName: 'textButton',
              buttonOnClick: this.handleTextClick,
              className: 'text',
              label: 'Text',
              definition: 'String of text',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'dateButton',
              buttonOnClick: this.handleDateClick,
              className: 'date',
              label: 'Date',
              definition: 'Standard ISO format date',
              defaultDisplay: 'Datepicker, with configurable format'
            },
            {
              buttonClassName: 'vinButton',
              buttonOnClick: this.handleVinClick,
              className: 'vin',
              label: 'VIN',
              definition: 'Vehicle Identification Number',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'numberButton',
              buttonOnClick: this.handleNumberClick,
              className: 'number',
              label: 'Number',
              definition: 'Integar',
              defaultDisplay: 'Free-form integar input'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false
          });
        }
      }
    }
    if(!this.state.buttonActive){
      let activateButtonArray = [
        {
          buttonClassName: 'textButton' + ' active',
          buttonOnClick: this.handleTextClick,
          className: 'text',
          label: 'Text',
          definition: 'String of text',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'dateButton',
          buttonOnClick: this.handleDateClick,
          className: 'date',
          label: 'Date',
          definition: 'Standard ISO format date',
          defaultDisplay: 'Datepicker, with configurable format'
        },
        {
          buttonClassName: 'vinButton',
          buttonOnClick: this.handleVinClick,
          className: 'vin',
          label: 'VIN',
          definition: 'Vehicle Identification Number',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true
      });
    }
  }

  handleDateClick = (e, data) => {
    console.log('ON CLICK DATE DATA', data);
    console.log('DATE CHILDREN PROPS', data.children.props);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){
        console.log('EACH ITEM IN ARRAY', this.state.types[i]);

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('DATE IS THE ACTIVE ITEM', this.state.types[i]);
          let resetActiveTypesArray = [
            {
              buttonClassName: 'textButton',
              buttonOnClick: this.handleTextClick,
              className: 'text',
              label: 'Text',
              definition: 'String of text',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'dateButton',
              buttonOnClick: this.handleDateClick,
              className: 'date',
              label: 'Date',
              definition: 'Standard ISO format date',
              defaultDisplay: 'Datepicker, with configurable format'
            },
            {
              buttonClassName: 'vinButton',
              buttonOnClick: this.handleVinClick,
              className: 'vin',
              label: 'VIN',
              definition: 'Vehicle Identification Number',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'numberButton',
              buttonOnClick: this.handleNumberClick,
              className: 'number',
              label: 'Number',
              definition: 'Integar',
              defaultDisplay: 'Free-form integar input'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false
          });
        }
      }
    }
    if(!this.state.buttonActive){
      let activateButtonArray = [
        {
          buttonClassName: 'textButton',
          buttonOnClick: this.handleTextClick,
          className: 'text',
          label: 'Text',
          definition: 'String of text',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'dateButton' + ' active',
          buttonOnClick: this.handleDateClick,
          className: 'date',
          label: 'Date',
          definition: 'Standard ISO format date',
          defaultDisplay: 'Datepicker, with configurable format'
        },
        {
          buttonClassName: 'vinButton',
          buttonOnClick: this.handleVinClick,
          className: 'vin',
          label: 'VIN',
          definition: 'Vehicle Identification Number',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true
      });
    }
  }

  handleVinClick = (e, data) => {
    console.log('ON CLICK VIN DATA', data);
    console.log('VIN CHILDREN PROPS', data.children.props);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){
        console.log('EACH ITEM IN ARRAY', this.state.types[i]);

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('VIN IS THE ACTIVE ITEM', this.state.types[i]);
          let resetActiveTypesArray = [
            {
              buttonClassName: 'textButton',
              buttonOnClick: this.handleTextClick,
              className: 'text',
              label: 'Text',
              definition: 'String of text',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'dateButton',
              buttonOnClick: this.handleDateClick,
              className: 'date',
              label: 'Date',
              definition: 'Standard ISO format date',
              defaultDisplay: 'Datepicker, with configurable format'
            },
            {
              buttonClassName: 'vinButton',
              buttonOnClick: this.handleVinClick,
              className: 'vin',
              label: 'VIN',
              definition: 'Vehicle Identification Number',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'numberButton',
              buttonOnClick: this.handleNumberClick,
              className: 'number',
              label: 'Number',
              definition: 'Integar',
              defaultDisplay: 'Free-form integar input'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false
          });
        }
      }
    }
    if(!this.state.buttonActive){
      let activateButtonArray = [
        {
          buttonClassName: 'textButton',
          buttonOnClick: this.handleTextClick,
          className: 'text',
          label: 'Text',
          definition: 'String of text',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'dateButton',
          buttonOnClick: this.handleDateClick,
          className: 'date',
          label: 'Date',
          definition: 'Standard ISO format date',
          defaultDisplay: 'Datepicker, with configurable format'
        },
        {
          buttonClassName: 'vinButton' + ' active',
          buttonOnClick: this.handleVinClick,
          className: 'vin',
          label: 'VIN',
          definition: 'Vehicle Identification Number',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true
      });
    }
  }

  handleNumberClick = (e, data) => {
    console.log('ON CLICK NUMBER DATA', data);
    console.log('NUMBER CHILDREN PROPS', data.children.props);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){
        console.log('EACH ITEM IN ARRAY', this.state.types[i]);

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('NUMBER IS THE ACTIVE ITEM', this.state.types[i]);
          let resetActiveTypesArray = [
            {
              buttonClassName: 'textButton',
              buttonOnClick: this.handleTextClick,
              className: 'text',
              label: 'Text',
              definition: 'String of text',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'dateButton',
              buttonOnClick: this.handleDateClick,
              className: 'date',
              label: 'Date',
              definition: 'Standard ISO format date',
              defaultDisplay: 'Datepicker, with configurable format'
            },
            {
              buttonClassName: 'vinButton',
              buttonOnClick: this.handleVinClick,
              className: 'vin',
              label: 'VIN',
              definition: 'Vehicle Identification Number',
              defaultDisplay: 'Free-form text input'
            },
            {
              buttonClassName: 'numberButton',
              buttonOnClick: this.handleNumberClick,
              className: 'number',
              label: 'Number',
              definition: 'Integar',
              defaultDisplay: 'Free-form integar input'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false
          });
        }
      }
    }
    if(!this.state.buttonActive){
      let activateButtonArray = [
        {
          buttonClassName: 'textButton',
          buttonOnClick: this.handleTextClick,
          className: 'text',
          label: 'Text',
          definition: 'String of text',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'dateButton',
          buttonOnClick: this.handleDateClick,
          className: 'date',
          label: 'Date',
          definition: 'Standard ISO format date',
          defaultDisplay: 'Datepicker, with configurable format'
        },
        {
          buttonClassName: 'vinButton',
          buttonOnClick: this.handleVinClick,
          className: 'vin',
          label: 'VIN',
          definition: 'Vehicle Identification Number',
          defaultDisplay: 'Free-form text input'
        },
        {
          buttonClassName: 'numberButton' + ' active',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true
      });
    }
  }

  render() {
    console.log('APP STATE', this.state);
    // let types = [
      // {
        // buttonClassName: 'numberButton',
        // className: 'number',
        // label: 'Number',
        // definition: 'Integar',
        // defaultDisplay: 'Free-form integar input'
      // },
      // {
      //   buttonClassName: 'currencyButton',
      //   className: 'currency',
      //   label: 'Currency',
      //   definition: 'Form of currency',
      //   defaultDisplay: 'Free-form currency input'
      // },
      // {
      //   buttonClassName: 'selectButton',
      //   className: 'select',
      //   label: 'Select (Multiple preset options with a single choice)',
      //   definition: 'Select single option from preset list',
      //   defaultDisplay: 'Single choice from multiple preset options'
      // }
    // ];

    // console.log('TYPES BEFORE RETURN', types);

    return (
      <div className="App">
        <CommercialContainer>
          <h1 className="commercialHeader">Commercial Property</h1>

          <AddFieldModal types={this.state.types} appState={this.state} handleTextClick={this.handleTextClick} />

          {/* <h3>Preview Fields Below</h3>
          <FieldsContainer>
            <div className="row">

            </div>
          </FieldsContainer> */}

        </CommercialContainer>
      </div>
    );
  }
}

export default App;
