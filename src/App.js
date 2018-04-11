import React, { Component } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';
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
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ],
      buttonActive: false,
      textInput: false,
      dateInput: false,
      vinInput: false,
      numberInput: false,
      currencyInput: false,
      selectInput: false,
      displayLabel: '',
      referenceName: '',
      defaultValue: '',
      customValidation: '',
      renderFieldsArray: []
    }
  }

  handleTextClick = (e, data) => {
    console.log('ON CLICK TEXT DATA', data);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: true,
        dateInput: false,
        vinInput: false,
        numberInput: false,
        currencyInput: false,
        selectInput: false,
        customValidation: ''
      });
    }
  }

  handleDateClick = (e, data) => {
    console.log('DATE EVENT', e.target.value);
    console.log('ON CLICK DATE DATA', data);
    console.log('DATE TOGGLE HIT');

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: false,
        dateInput: true,
        vinInput: false,
        numberInput: false,
        currencyInput: false,
        selectInput: false,
        customValidation: '/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/g'
      });
    }
  }

  handleVinClick = (e, data) => {
    console.log('ON CLICK VIN DATA', data);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: false,
        dateInput: false,
        vinInput: true,
        numberInput: false,
        currencyInput: false,
        selectInput: false,
        customValidation: ''
      });
    }
  }

  handleNumberClick = (e, data) => {
    console.log('NUMBER EVENT', e);
    console.log('ON CLICK NUMBER DATA', data);
    console.log('NUMBER TOGGLE HIT');

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: false,
        dateInput: false,
        vinInput: false,
        numberInput: true,
        currencyInput: false,
        selectInput: false,
        customValidation: '/[0-9]/g'
      });
    }
  }

  handleCurrencyClick = (e, data) => {
    console.log('ON CLICK CURRENCY DATA', data);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('CURRENCY IS THE ACTIVE ITEM', this.state.types[i]);
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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        },
        {
          buttonClassName: 'currencyButton' + ' active',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: false,
        dateInput: false,
        vinInput: false,
        numberInput: false,
        currencyInput: true,
        selectInput: false,
        customValidation: '/^(?!\(.*[^)]$|[^(].*\)$)\(?\$?(0|[1-9]\d{0,2}(,?\d{3})?)(\.\d\d?)?\)?$/g'
      });
    }
  }

  handleSelectClick = (e, data) => {
    console.log('ON CLICK SELECT DATA', data);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('SELECT IS THE ACTIVE ITEM', this.state.types[i]);
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
            },
            {
              buttonClassName: 'currencyButton',
              buttonOnClick: this.handleCurrencyClick,
              className: 'currency',
              label: 'Currency',
              definition: 'Form of currency',
              defaultDisplay: 'Free-form currency input'
            },
            {
              buttonClassName: 'selectButton',
              buttonOnClick: this.handleSelectClick,
              className: 'select',
              label: 'Select (Multiple preset options with a single choice)',
              definition: 'Select single option from preset list',
              defaultDisplay: 'Single choice from multiple preset options'
            }
          ];

          this.setState({
            types: resetActiveTypesArray,
            buttonActive: false,
            textInput: false,
            dateInput: false,
            vinInput: false,
            numberInput: false,
            currencyInput: false,
            selectInput: false,
            customValidation: ''
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
          buttonClassName: 'numberButton',
          buttonOnClick: this.handleNumberClick,
          className: 'number',
          label: 'Number',
          definition: 'Integar',
          defaultDisplay: 'Free-form integar input'
        },
        {
          buttonClassName: 'currencyButton',
          buttonOnClick: this.handleCurrencyClick,
          className: 'currency',
          label: 'Currency',
          definition: 'Form of currency',
          defaultDisplay: 'Free-form currency input'
        },
        {
          buttonClassName: 'selectButton' + ' active',
          buttonOnClick: this.handleSelectClick,
          className: 'select',
          label: 'Select (Multiple preset options with a single choice)',
          definition: 'Select single option from preset list',
          defaultDisplay: 'Single choice from multiple preset options'
        }
      ];

      this.setState({
        types: activateButtonArray,
        buttonActive: true,
        textInput: false,
        dateInput: false,
        vinInput: false,
        numberInput: false,
        currencyInput: false,
        selectInput: true,
        customValidation: ''
      });
    }
  }

  handleDisplayLabel = (displayLabel) => {
    this.setState({displayLabel: displayLabel});
  }

  handleReferenceName = (referenceName) => {
    this.setState({referenceName: referenceName});
  }

  handleDefaultValue = (optionsArr) => {
    this.setState({defaultValue: optionsArr});
  }

  handleCustomValidation = (regexPattern) => {
    this.setState({customValidation: regexPattern});
  }

  handleModalSave = (modalState) => {
    console.log('MODAL STATE AFTER SAVE', modalState);
    console.log('APP STATE AFTER SAVE', this.state);
    this.setState({renderFieldsArray: modalState.renderFieldsArray});
    console.log('RENDER ARRAY REWRITTEN BY MODAL STATE');
  }

  render() {
    console.log('APP STATE', this.state);

    return (
      <div className="App">
        <CommercialContainer>
          <h1 className="commercialHeader">Commercial Property</h1>

          <AddFieldModal
            types={this.state.types}
            appState={this.state}
            handleDisplayLabel={this.handleDisplayLabel}
            handleReferenceName={this.handleReferenceName}
            handleDefaultValue={this.handleDefaultValue}
            handleCustomValidation={this.handleCustomValidation}
            handleModalSave={this.handleModalSave}
          />

          <h3>Preview Fields Below</h3>

          <FieldsContainer appState={this.state} handleModalSave={this.handleModalSave} />

        </CommercialContainer>
      </div>
    );
  }
}

export default App;
