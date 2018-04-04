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

  componentDidMount(props){
    console.log('MOUNTED PROPS', this.props);
    this.props.types.map((mountedType) => {
      this.state.renderArray.push(mountedType);
    });
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

    if(e.target.value){
      console.log('EVENT NOW');
    }

    this.state.renderArray.map((type) => {
      let initialRenderArray = this.state.renderArray;
      console.log('TYPE IN SEARCH', type);
      if(e.target.value === type.className){
        let newRenderArray = [];

        console.log('MATCH');
        newRenderArray.push(type);
        console.log('NEW ARR', newRenderArray)

        this.setState({
          foundType: true,
          renderArray: newRenderArray
        });
        console.log('STATE AT END OF FOUND', this.state);
      }
      console.log('STATE OUTSIDE OF FOUND CONDITIONAL', this.state);
      if(e.target.value !== type.className){
        if(this.state.foundType){
          console.log('NOW NOT SAME');
          this.setState({
            foundType: false,
            renderArray: this.props.types
          });
        }
        if(!this.state.foundType){
          // this.state.renderArray.push(type);
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
