import React, { Component } from 'react';
import Types from './Types';
import { Button, Form } from 'semantic-ui-react';

class FilterTypes extends Component {
  state = {
    selectedTypes: [],
    activeTextButton: false,
    activeDateButton: false,
    activeVINButton: false,
    activeNumberButton: false,
    activeCurrencyButton: false,
    activeSelectButton: false
  }

  handleTextClick = () => {
    this.setState({ activeTextButton: !this.state.activeTextButton });

    if(!this.state.activeTextButton){
      let textTypeObj = {
        className: "type text",
        label: "Text",
        definition: "String of text",
        defaultDisplay: "Free-form text input"
      };
      this.state.selectedTypes.push(textTypeObj);
      console.log('TEXT OBJ PUSHED');
    }

    if(this.state.activeTextButton){
      console.log('TEXT TRUE TO FALSE');
      for(let i = 0; i < this.state.selectedTypes.length; i++){
        if(this.state.selectedTypes[i].label === "Text"){
          console.log('FOUND TEXT OBJ');
          this.state.selectedTypes.splice(i, 1);
          console.log('ARRAY AFTER TEXT SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  handleDateClick = () => {
    this.setState({ activeDateButton: !this.state.activeDateButton });

    if(!this.state.activeDateButton){
      let dateTypeObj = {
        className: "type date",
        label: "Date",
        definition: "Standard ISO format date",
        defaultDisplay: "Datepicker, with configurable format"
      };
      this.state.selectedTypes.push(dateTypeObj);
      console.log('DATE OBJ PUSHED');
    }

    if(this.state.activeDateButton){
      console.log('DATE TRUE TO FALSE');
      for(let j = 0; j < this.state.selectedTypes.length; j++){
        if(this.state.selectedTypes[j].label === "Date"){
          console.log('FOUND DATE OBJ');
          this.state.selectedTypes.splice(j, 1);
          console.log('ARRAY AFTER DATE SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  handleVINClick = () => {
    this.setState({ activeVINButton: !this.state.activeVINButton });

    if(!this.state.activeVINButton){
      let vinTypeObj = {
        className: "type vin",
        label: "VIN",
        definition: "Vehicle Identification Number",
        defaultDisplay: "Free-form text input"
      };
      this.state.selectedTypes.push(vinTypeObj);
      console.log('VIN OBJ PUSHED');
    }

    if(this.state.activeVINButton){
      console.log('VIN TRUE TO FALSE');
      for(let k = 0; k < this.state.selectedTypes.length; k++){
        if(this.state.selectedTypes[k].label === "VIN"){
          console.log('FOUND VIN OBJ');
          this.state.selectedTypes.splice(k, 1);
          console.log('ARRAY AFTER VIN SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  handleNumberClick = () => {
    this.setState({ activeNumberButton: !this.state.activeNumberButton });

    if(!this.state.activeNumberButton){
      let numberTypeObj = {
        className: "type number",
        label: "Number",
        definition: "Integar",
        defaultDisplay: "Free-form integar input"
      };
      this.state.selectedTypes.push(numberTypeObj);
      console.log('NUMBER OBJ PUSHED');
    }

    if(this.state.activeNumberButton){
      console.log('NUMBER TRUE TO FALSE');
      for(let h = 0; h < this.state.selectedTypes.length; h++){
        if(this.state.selectedTypes[h].label === "Number"){
          console.log('FOUND NUMBER OBJ');
          this.state.selectedTypes.splice(h, 1);
          console.log('ARRAY AFTER NUMBER SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  handleCurrencyClick = () => {
    this.setState({ activeCurrencyButton: !this.state.activeCurrencyButton });

    if(!this.state.activeCurrencyButton){
      let currencyTypeObj = {
        className: "type currency",
        label: "Currency",
        definition: "Form of currency",
        defaultDisplay: "Free-form currency input"
      };
      this.state.selectedTypes.push(currencyTypeObj);
      console.log('CURRENCY OBJ PUSHED');
    }

    if(this.state.activeCurrencyButton){
      console.log('CURRENCY TRUE TO FALSE');
      for(let p = 0; p < this.state.selectedTypes.length; p++){
        if(this.state.selectedTypes[p].label === "Currency"){
          console.log('FOUND CURRENCY OBJ');
          this.state.selectedTypes.splice(p, 1);
          console.log('ARRAY AFTER CURRENCY SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  handleSelectClick = () => {
    this.setState({ activeSelectButton: !this.state.activeSelectButton });

    if(!this.state.activeSelectButton){
      let selectTypeObj = {
        className: "type select",
        label: "Select (Multiple preset options with a single choice)",
        definition: "Select single option from preset list",
        defaultDisplay: "Single choice from multiple preset options"
      };
      this.state.selectedTypes.push(selectTypeObj);
      console.log('SELECT OBJ PUSHED');
    }

    if(this.state.activeSelectButton){
      console.log('SELECT TRUE TO FALSE');
      for(let m = 0; m < this.state.selectedTypes.length; m++){
        if(this.state.selectedTypes[m].label === "Select (Multiple preset options with a single choice)"){
          console.log('FOUND SELECT OBJ');
          this.state.selectedTypes.splice(m, 1);
          console.log('ARRAY AFTER SELECT SPLICE', this.state.selectedTypes);
        }
      }
    }
  }

  render() {
    // console.log('STATE', this.state);
    return (
      <div className="filterTypes">
        <Form>
          <Form.Field>
            <label className="filterTypes-header">Filter Types</label>
          </Form.Field>
        </Form>

        <ul className="filterTypes-field">
          {this.state.selectedTypes.map((type) => {
            console.log('MAPPED TYPE', type);
            return <li key={type.label}>{type.label}</li>
          })}
        </ul>

        <Button className="textButton" toggle active={this.state.activeTextButton} onClick={this.handleTextClick}>
          <Types
            className="type text"
            label="Text"
            definition="String of text"
            defaultDisplay="Free-form text input"
          />
        </Button>

        <Button className="dateButton" toggle active={this.state.activeDateButton} onClick={this.handleDateClick}>
          <Types
            className="type date"
            label="Date"
            definition="Standard ISO format date"
            defaultDisplay="Datepicker, with configurable format"
          />
        </Button>

        <Button className="vinButton" toggle active={this.state.activeVINButton} onClick={this.handleVINClick}>
          <Types
            className="type vin"
            label="VIN"
            definition="Vehicle Identification Number"
            defaultDisplay="Free-form text input"
          />
        </Button>

        <Button className="numberButton" toggle active={this.state.activeNumberButton} onClick={this.handleNumberClick}>
          <Types
            className="type number"
            label="Number"
            definition="Integar"
            defaultDisplay="Free-form integar input"
          />
        </Button>

        <Button className="currencyButton" toggle active={this.state.activeCurrencyButton} onClick={this.handleCurrencyClick}>
          <Types
            className="type currency"
            label="Currency"
            definition="Form of currency"
            defaultDisplay="Free-form currency input"
          />
        </Button>

        <Button className="selectButton" toggle active={this.state.activeSelectButton} onClick={this.handleSelectClick}>
          <Types
            className="type select"
            label="Select (Multiple preset options with a single choice)"
            definition="Select single option from preset list"
            defaultDisplay="Single choice from multiple preset options"
          />
        </Button>
      </div>
    );
  }
}

export default FilterTypes;
