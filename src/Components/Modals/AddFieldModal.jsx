import React, { Component } from 'react';
import { Grid, Button, Header, Modal, Input, Label } from 'semantic-ui-react';
import Types from '../FieldTypes/Types';

class AddFieldModal extends Component {
  state = {
    modalOpen: false,
    typeArray: this.props.types ? this.props.types : [],
    renderArray: [],
    currentSearch: '',
    foundType: false
  }

  handleOpen = () => {
    this.setState({modalOpen: true});
  }

  handleClose = () => {
    this.setState({modalOpen: false});
  }

  // handleSave = () => {
  //
  // }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({currentSearch: e.target.value});

    this.state.typeArray.map((type) => {
      console.log('TYPE IN SEARCH', type);
      if(e.target.value === type.className){
        console.log('MATCH');
        this.setState({foundType: true});
        this.state.renderArray.push(type);
        console.log('STATE AT END OF FOUND', this.state);
      }
      console.log('STATE OUTSIDE OF FOUND CONDITIONAL', this.state);
      if(e.target.value !== type.className){
        if(this.state.foundType){
          console.log('NOW NOT SAME');
          console.log(this.state.foundType);
          this.state.renderArray.splice(0, 1);
          this.setState({foundType: false});
        }
      }
    });

    this.state.renderArray.map((renderType) => {
      console.log('TYPE IN RENDER ARR', renderType);
    });
  }

  render() {
    console.log('MODAL PROPS', this.props);
    console.log('MODAL STATE', this.state);

    return (
      <div className="AddFieldModal">
        <Modal
          trigger={<Button onClick={this.handleOpen}>Add Field</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='fullscreen'
        >
          <Header className='modal-header' content='Commercial Property - Add Field' />
          <Grid columns={4}>
            <Grid.Row>
              <Modal.Content>
                <Grid.Column className='fieldTypes-column1'>
                  <h3>Field Types</h3>

                  <div className='filterTypes'>
                    <h5>Filter Types</h5><br/>
                    <Input placeholder='Search types...' onKeyUp={this.handleSearch} />
                  </div>

                  {this.state.renderArray.map((type, i) => {
                    console.log('TYPE IN RENDER ARRAY', type);
                    // console.log('EACH TYPE', type);
                    // if(this.state.currentSearch === type.className){
                    //   console.log('GOT EM', type);
                    //   console.log('GOT EM INDEX', i);
                    //   this.state.renderArray.push(type);
                    //   console.log('STATE AFTER PUSH', this.state);
                    //   for(let k = 0; k < this.state.renderArray.length; k++){
                    //     console.log('INSIDE RENDER ARR', this.state.renderArray[k]);
                    //     return (
                    //       <div key={i} className='types'>
                    //         <Button className={this.state.renderArray[k].buttonClassName} toggle active={this.state.renderArray[k].buttonActive} onClick={this.state.renderArray[k].buttonOnClick}>
                    //           <Types
                    //             className={this.state.renderArray[k].className}
                    //             label={this.state.renderArray[k].label}
                    //             definition={this.state.renderArray[k].definition}
                    //             defaultDisplay={this.state.renderArray[k].defaultDisplay}
                    //           />
                    //         </Button>
                    //       </div>
                    //     );
                    //   }
                    // } else if(this.state.currentSearch !== type.className){
                    //   console.log('RENDER ALL SINCE NO MATCH');
                      return (
                        <div key={i} className='types'>
                          <Button className={type.buttonClassName} toggle active={type.buttonActive} onClick={type.buttonOnClick}>
                            <Types
                              className={type.className}
                              label={type.label}
                              definition={type.definition}
                              defaultDisplay={type.defaultDisplay}
                            />
                          </Button>
                        </div>
                      );
                    // }
                  })}
                </Grid.Column>
              </Modal.Content>
            </Grid.Row>
          </Grid>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default AddFieldModal;
