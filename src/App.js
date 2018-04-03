import React, { Component } from 'react';
import './App.css';
import CommercialContainer from './Components/CommercialContainer';
import FieldsContainer from './Components/FieldsContainer';
import AddFieldModal from './Components/Modals/AddFieldModal';

class App extends Component {
  state = {
    activeTextButton: false,
    activeDateButton: false,
  }

  handleTextClick = (e, data) => {
    console.log('ON CLICK DATA', data);
    this.setState({activeTextButton: !this.state.activeTextButton});
  }

  handleDateClick = (e, data) => {
    console.log('ON CLICK DATA', data);
    this.setState({activeDateButton: !this.state.activeDateButton});
  }


  render() {
    let types = [
      {
        buttonClassName: 'textButton',
        buttonOnClick: this.handleTextClick,
        buttonActive: this.state.activeTextButton,
        className: 'text',
        label: 'Text',
        definition: 'String of text',
        defaultDisplay: 'Free-form text input'
      },
      {
        buttonClassName: 'dateButton',
        buttonOnClick: this.handleDateClick,
        buttonActive: this.state.activeDateButton,
        className: 'date',
        label: 'Date',
        definition: 'Standard ISO format date',
        defaultDisplay: 'Datepicker, with configurable format'
      },
      // {
      //   buttonClassName: 'vinButton',
      //   className: 'vin',
      //   label: 'VIN',
      //   definition: 'Vehicle Identification Number',
      //   defaultDisplay: 'Free-form text input'
      // },
      // {
      //   buttonClassName: 'numberButton',
      //   className: 'number',
      //   label: 'Number',
      //   definition: 'Integar',
      //   defaultDisplay: 'Free-form integar input'
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
    ];

    console.log('APP STATE', this.state);

    return (
      <div className="App">
        <CommercialContainer>
          <h1 className="commercialHeader">Commercial Property</h1>

          <AddFieldModal types={types} />

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
