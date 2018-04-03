import React, { Component } from 'react';
import './App.css';
import CommercialContainer from './Components/CommercialContainer';
import FieldsContainer from './Components/FieldsContainer';
import AddFieldModal from './Components/Modals/AddFieldModal';

class App extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  // handleSave = () => {
  //
  // }

  render() {
    console.log('APP STATE', this.state);
    return (
      <div className="App">
        <CommercialContainer>
          <h1 className="commercialHeader">Commercial Property</h1>

          <AddFieldModal />

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
