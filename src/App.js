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
      ],
      // activeTypeArray: [
      //   {
      //     className: 'text',
      //     activeButton: ' active'
      //   },
      //   {
      //     className: 'date',
      //     activeButton: ''
      //   }
      // ],
      buttonActive: true
    }
  }

  // 1. CHECK IF ANY OTHER TYPE IS SELECTED
  // 2. RESET TO FALSE IF IT IS
  // 3. CHANGE CORRECT TYPE TO ACTIVE
  // 4. REPEAT

  handleTextClick = (e, data) => {
    console.log('ON CLICK TEXT', data);
    console.log('NAME', data.children.props);

    if(this.state.buttonActive){ // if any button is active
      for(let i = 0; i < this.state.types.length; i++){
        console.log('EACH ITEM IN ARRAY', this.state.types[i]);

        if(this.state.types[i].buttonClassName.includes(' active')){ // finding which specific button is active
          console.log('THIS IS THE ACTIVE ITEM', this.state.types[i]);
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
            }
          ];

          this.setState({types: resetActiveTypesArray});
          this.setState({buttonActive: false});
        }
      }
    }
    if(!this.state.buttonActive){
      let activateTextButtonArray = [
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
        }
      ];

      this.setState({types: activateTextButtonArray});
      this.setState({buttonActive: true});

      console.log('STATE AFTER TEXT ACTIVATION', this.state);
    }
  }

  handleDateClick = (e, data) => {
    console.log('ON CLICK DATE', data);
    // this.setState({activeDateButton: !this.state.activeDateButton});
  }

  // handleClick = (e, data) => {
  //   console.log('HANDLE CLICK DATA'. data);
  // }

  render() {
    console.log('APP STATE', this.state);
    // let types = [
      // {
      //   buttonClassName: 'textButton' + this.state.activeTypeArray[0].activeButton,
      //   buttonOnClick: this.handleTextClick,
      //   className: 'text',
      //   label: 'Text',
      //   definition: 'String of text',
      //   defaultDisplay: 'Free-form text input'
      // },
      // {
      //   buttonClassName: 'dateButton',
      //   buttonOnClick: this.handleDateClick,
      //   className: 'date',
      //   label: 'Date',
      //   definition: 'Standard ISO format date',
      //   defaultDisplay: 'Datepicker, with configurable format'
      // },
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
