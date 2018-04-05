import React, { Component } from 'react';
import { Grid, Button, Header, Modal, Input, Label } from 'semantic-ui-react';
import Types from '../FieldTypes/Types';

class AddFieldModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      typeArray: this.props.types,
      currentSearch: '',
      foundType: false
    }
  }

  // componentDidMount(props){
  //   console.log('MOUNTED PROPS', this.props);
  //   this.props.types.map((mountedType) => {
  //     this.state.typeArray.push(mountedType);
  //   });
  // }

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

    console.log('MODAL SEARCH PROPS', this.props);
    console.log('MODAL SEARCH STATE', this.state);

    this.props.types.map((type) => {
      console.log('TYPE IN SEARCH', type);
      if(e.target.value === type.className){
        let newRenderArray = [];

        console.log('MATCH');
        newRenderArray.push(type);
        console.log('NEW ARR', newRenderArray)

        this.setState({
          foundType: true,
          typeArray: newRenderArray
        });
      }

      if(e.target.value !== type.className){
        if(this.state.foundType){
          console.log('NOT SAME');
          this.setState({
            foundType: false,
            typeArray: this.props.types
          });
        }
      }
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
                    <Input placeholder='Search a type' onKeyUp={this.handleSearch} />
                  </div>

                  {this.state.typeArray.map((type, i) => {
                    console.log('TYPE IN RENDER ARRAY', type);
                    console.log('ACTIVE CLASS', type.buttonClassName);
                    return (
                      <div key={i} className='types'>
                        <Button className={type.buttonClassName} toggle onClick={type.buttonOnClick}>
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
