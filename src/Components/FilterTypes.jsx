import React, { Component } from 'react';
import Types from './Types';
import { Button } from 'semantic-ui-react';

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
      console.log('PUSHED');
    }

    if(this.state.activeTextButton){
      console.log('CHANGING TRUE TO FALSE');
      for(let i = 0; i < this.state.selectedTypes.length; i++){
        console.log(this.state.selectedTypes[i]);
        if(this.state.selectedTypes[i].label === "Text"){
          console.log('FOUND TEXT OBJ');
          this.state.selectedTypes.splice(i, 1);
          console.log('ARRAY AFTER SPLICE', this.state.selectedTypes);
        }
      }
    }
  };

  handleDateClick = () => this.setState({ activeDateButton: !this.state.activeDateButton });

  handleVINClick = () => this.setState({ activeVINButton: !this.state.activeVINButton });

  handleNumberClick = () => this.setState({ activeNumberButton: !this.state.activeNumberButton });

  handleCurrencyClick = () => this.setState({ activeCurrencyButton: !this.state.activeCurrencyButton });

  handleSelectClick = () => this.setState({ activeSelectButton: !this.state.activeSelectButton });

  render() {
    console.log('STATE', this.state);
    return (
      <div className="filterTypes">
        <h5 className="filterTypes-header">Filter Types</h5>

        <ul className="filterTypes-field">

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
