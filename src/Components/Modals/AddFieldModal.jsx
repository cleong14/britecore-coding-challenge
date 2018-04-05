import React, { Component } from 'react';
import { Grid, Button, Header, Modal, Input } from 'semantic-ui-react';
import Types from '../FieldTypes/Types';
import FieldDetailsContainer from '../FieldsContainer';

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

  componentWillReceiveProps(nextProps){
    if(this.props.types !== nextProps.types){
      this.setState({typeArray: nextProps.types});
    }
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
    this.setState({currentSearch: e.target.value});

    this.state.typeArray.map((type) => {
      if(e.target.value === type.className){
        console.log('MATCH');
        let newRenderArray = [];

        newRenderArray.push(type);
        console.log('NEW ARR', newRenderArray)

        this.setState({
          foundType: true,
          typeArray: newRenderArray
        });
      }

      if(e.target.value !== type.className){
        if(this.state.foundType){
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
          <Modal.Content>
            <Grid relaxed columns={4}>

              <Grid.Row column={2}>
                <Grid.Column>
                  <h3>Field Types</h3>
                </Grid.Column>

                <Grid.Column>
                  <h3>Field Details</h3>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row column={4}>
                <Grid.Column>
                  <h5>Filter Types</h5>
                  <Input placeholder='Search types' onKeyUp={this.handleSearch} />
                </Grid.Column>

                <Grid.Column>
                  <h5>Display Label</h5>
                  <Input placeholder='Label your input' onBlur={this.handleDisplayLabelBlur} />
                  <h6>For display purposes, spaces allowed.</h6>
                </Grid.Column>

                <Grid.Column>
                  <h5>Reference Name</h5>
                  <Input placeholder='E.g. display-label' onBlur={this.handleReferenceNameBlur} />
                  <h6>Used to reference in calculations, no spaces allowed.</h6>
                </Grid.Column>

                <Grid.Column>
                  {/* for Field Groups */}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row column={3}>
                <Grid.Column>
                  {this.state.typeArray.map((type, i) => {
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

                <Grid.Column>
                  <Grid.Row column={2}>
                    <Grid.Column>
                      <h5>Default Value</h5>
                      <Input placeholder='Default value for input' onBlur={this.handleDefaultValueBlur} />
                      <h6>Initial value for input. Use "None" for no default value.</h6>
                    </Grid.Column>

                    <Grid.Column style={{display: 'none'}}>
                      <h5>Default Value</h5>
                      <Input placeholder='Default value for input' onBlur={this.handleDefaultValueBlur} />
                      <h6>Initial value for input. Use "None" for no default value.</h6>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row column={2}>
                    <Grid.Column>
                      <h5>Custom Validation</h5>
                      <Input placeholder='Set custom validations' onBlur={this.handleCustomValidationBlur} />
                      <h6>Any regex pattern can be used for custom input validation.</h6>
                    </Grid.Column>

                    <Grid.Column style={{display: 'none'}}>
                      <h5>Custom Validation</h5>
                      <Input placeholder='Set custom validations' onBlur={this.handleCustomValidationBlur} />
                      <h6>Any regex pattern can be used for custom input validation.</h6>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row column={2}>
                    <Grid.Column>
                      <h4>Tags</h4>
                    </Grid.Column>

                    <Grid.Column style={{display: 'none'}}>
                      <h4>Tags</h4>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row column={2}>
                    <Grid.Column>
                      <h5>Tag Group</h5>
                      <Button content="TAG GROUP BUTTONS GO HERE" />
                    </Grid.Column>

                    <Grid.Column>
                      <h5>Tags</h5>
                      <h6>Select a tag group to see individual tags.</h6>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            {/* NEED TO FIGURE OUT A WAY TO RENDER TAG GROUP AND TAGS SECTION CORRECT!!!! */}

            {/* <Grid relaxed columns={4}>
              <Grid.Column className='modalColumn1-fieldTypes'>

              </Grid.Column>

              <FieldDetailsContainer>
                <Grid.Column className='modalColumn2-fieldDetails'>
                  <h3>Field Details</h3>

                  <div className='displayLabel'>
                    <h5>Display Label</h5><br/>
                    <Input placeholder='Label your input' onBlur={this.handleDisplayLabelBlur} />
                    <h6>For display purposes, spaces allowed.</h6>
                  </div>

                  <div className='defaultValue'>
                    <h5>Default Value</h5><br/>
                    <Input placeholder='Default value for input' onBlur={this.handleDefaultValueBlur} />
                    <h6>Initial value for input. Use "None" for no default value.</h6>
                  </div>

                  <div className='customValidation'>
                    <h5>Custom Validation</h5><br/>
                    <Input placeholder='Set custom validations' onBlur={this.handleCustomValidationBlur} />
                    <h6>Any regex pattern can be used for custom input validation.</h6>
                  </div>



                </Grid.Column>

                <Grid.Column className='modalColumn3-fieldDetails'>
                  <div className='referenceName'>
                    <h5>Reference Name</h5><br/>
                    <Input placeholder='E.g. display-label' onBlur={this.handleReferenceNameBlur} />
                    <h6>Used to reference in calculations, no spaces allowed.</h6>
                  </div>
                </Grid.Column>

              </FieldDetailsContainer>
            </Grid> */}
          </Modal.Content>
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
