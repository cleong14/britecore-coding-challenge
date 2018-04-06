import React, { Component } from 'react';
import './App.css';
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
      displayLabel: '',
      referenceName: '',
      defaultValue: '',
      customValidation: ''
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
        buttonActive: true
      });
    }
  }

  handleDateClick = (e, data) => {
    console.log('ON CLICK DATE DATA', data);

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
        buttonActive: true
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
        buttonActive: true
      });
    }
  }

  handleNumberClick = (e, data) => {
    console.log('ON CLICK NUMBER DATA', data);

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
        buttonActive: true
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
        buttonActive: true
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
        buttonActive: true
      });
    }
  }

  render() {
    console.log('APP STATE', this.state);

    return (
      <div className="App">
        <CommercialContainer>
          <h1 className="commercialHeader">Commercial Property</h1>

          <AddFieldModal types={this.state.types} appState={this.state} />

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
