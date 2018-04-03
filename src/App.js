import React, { Component } from 'react';
import './App.css';
import { Input, Form } from 'semantic-ui-react'
import CommercialContainer from './Components/CommercialContainer';
import FieldTypes from './Components/FieldTypes/FieldTypes';
import FilterTypes from './Components/FieldTypes/FilterTypes';

class App extends Component {
  state = {
    searchText: '',
    initialTypeList: [
      {
        buttonClassName: 'textButton',
        typesClassName: 'type text',
        label: 'Text',
        definition: 'String of text',
        defaultDisplay: 'Free-form text input'
      },
      {
        buttonClassName: 'dateButton',
        typesClassName: 'type date',
        label: 'Date',
        definition: 'Standard ISO format date',
        defaultDisplay: 'Datepicker, with configurable format'
      },
      {
        buttonClassName: 'vinButton',
        typesClassName: 'type vin',
        label: 'VIN',
        definition: 'Vehicle Identification Number',
        defaultDisplay: 'Free-form text input'
      },
      {
        buttonClassName: 'numberButton',
        typesClassName: 'type number',
        label: 'Number',
        definition: 'Integar',
        defaultDisplay: 'Free-form integar input'
      },
      {
        buttonClassName: 'currencyButton',
        typesClassName: 'type currency',
        label: 'Currency',
        definition: 'Form of currency',
        defaultDisplay: 'Free-form currency input'
      },
      {
        buttonClassName: 'selectButton',
        typesClassName: 'type select',
        label: 'Select (Multiple preset options with a single choice)',
        definition: 'Select single option from preset list',
        defaultDisplay: 'Single choice from multiple preset options'
      }
    ]
  }

  handleSearchBlur = (e) => {
    this.setState({searchText: e.target.value});
  }

  render() {
    console.log('APP STATE', this.state);
    // console.log('APP STATE TYPE LIST', this.state.initialTypeList);

    // const initialTypeList = [
    //   {
    //     buttonClassName: 'textButton',
    //     typesClassName: 'type text',
    //     label: 'Text',
    //     definition: 'String of text',
    //     defaultDisplay: 'Free-form text input'
    //   },
    //   {
    //     buttonClassName: 'dateButton',
    //     typesClassName: 'type date',
    //     label: 'Date',
    //     definition: 'Standard ISO format date',
    //     defaultDisplay: 'Datepicker, with configurable format'
    //   },
    //   {
    //     buttonClassName: 'vinButton',
    //     typesClassName: 'type vin',
    //     label: 'VIN',
    //     definition: 'Vehicle Identification Number',
    //     defaultDisplay: 'Free-form text input'
    //   },
    //   {
    //     buttonClassName: 'numberButton',
    //     typesClassName: 'type number',
    //     label: 'Number',
    //     definition: 'Integar',
    //     defaultDisplay: 'Free-form integar input'
    //   },
    //   {
    //     buttonClassName: 'currencyButton',
    //     typesClassName: 'type currency',
    //     label: 'Currency',
    //     definition: 'Form of currency',
    //     defaultDisplay: 'Free-form currency input'
    //   },
    //   {
    //     buttonClassName: 'selectButton',
    //     typesClassName: 'type select',
    //     label: 'Select (Multiple preset options with a single choice)',
    //     definition: 'Select single option from preset list',
    //     defaultDisplay: 'Single choice from multiple preset options'
    //   }
    // ];

    return (
      <div className="App">
        <CommercialContainer>
          <div className="commercialContainer-content">
          <h1 className="commercialContainer-header">Commercial Property - Add Field</h1>

          <Form>
            <div className="row">
              <div className="col-md-3 fieldTypes">
                <h3 className="fieldTypes-header">Field Types</h3>

                <Form.Field>
                  <label className="filterTypes-label">Filter Types</label>
                  <Input placeholder="Search types" onBlur={this.handleSearchBlur} />
                </Form.Field>

                <FieldTypes searchText={this.state.searchText} textButton={this.state.initialTypeList[0]} dateButton={this.state.initialTypeList[1]} vinButton={this.state.initialTypeList[2]} numberButton={this.state.initialTypeList[3]} currencyButton={this.state.initialTypeList[4]} selectButton={this.state.initialTypeList[5]} />
              </div>
            </div>
          </Form>
        </div>

          <FieldTypes searchText={this.state.searchText} />
        </CommercialContainer>
      </div>
    );
  }
}

export default App;
