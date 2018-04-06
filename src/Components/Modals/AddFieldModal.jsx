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
      foundType: false,
      displayLabel: this.props.appState.displayLabel,
      referenceName: this.props.appState.referenceName,
      defaultValue: this.props.appState.defaultValue,
      customValidation: this.props.appState.customValidation
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('NEXT PROPS', nextProps)
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

  setDisplayLabel = (e) => {
    this.setState({displayLabel: e.target.value});
  }

  handleDisplayLabel = (e) => {
    console.log('LABEL BLUR', e.target.value);
  }

  setReferenceName = (e) => {
    this.setState({referenceName: e.target.value});
  }

  handleReferenceName = (e) => {
    console.log('REFERENCE BLUR', e.target.value);
  }

  setDefaultValue = (e) => {
    this.setState({defaultValue: e.target.value});
  }

  handleDefaultValue = (e) => {
    console.log('DEFAULT BLUR', e.target.value);
  }

  setCustomValidation = (e) => {
    this.setState({customValidation: e.target.value});
  }

  handleCustomValidation = (e) => {
    console.log('CUSTOM BLUR', e.target.value);
  }

  render() {
    console.log('MODAL PROPS', this.props);
    console.log('MODAL STATE', this.state);

    return (
      <div className="AddFieldModal modal-body">
        <div className="container-fluid">
          <Modal
            trigger={<Button onClick={this.handleOpen}>Add Field</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            size='fullscreen'
          >
            <Modal.Header>Commercial Property - Add Field</Modal.Header>
            <Modal.Content scrolling>
              <div className="row">
                <div className="col-md-3">
                  <h3>Field Types</h3>

                  <h5>Filter Types</h5>
                  <Input placeholder='Search types' onKeyUp={this.handleSearch} />

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
                </div>

                <div className="col-md-9">
                  <h3>Field Details</h3>

                  <div className="row">
                    <div className="col-md-3">
                      <h5>Display Label</h5>
                      <Input
                        placeholder='Label your input'
                        onChange={this.setDisplayLabel}
                        onBlur={this.handleDisplayLabel}
                        value={this.state.displayLabel}
                      />
                      <h6>For display purposes, spaces allowed.</h6>
                    </div>

                    <div className="col-md-3">
                      <h5>Reference Name</h5>
                      <Input
                        placeholder='E.g. display-label'
                        onChange={this.setReferenceName}
                        onBlur={this.handleReferenceName}
                        value={this.state.referenceName}
                      />
                      <h6>Used to reference in calculations, no spaces allowed.</h6>
                    </div>

                    <div className="col-md-3">
                      <h5>FIELD GROUP STUFF</h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <h5>Default Value</h5>
                      <Input
                        placeholder='Default value for input'
                        onChange={this.setDefaultValue}
                        onBlur={this.handleDefaultValue}
                        value={this.state.defaultValue}
                      />
                      <h6>Initial value for input. Use "None" for no default value.</h6>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <h5>Custom Validation</h5>
                      <Input
                        placeholder='Set custom validations'
                        onChange={this.setCustomValidation}
                        onBlur={this.handleCustomValidation}
                        value={this.state.customValidation}
                      />
                      <h6>Any regex pattern can be used for custom input validation.</h6>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <h4>Tags</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <h5>Tag Group</h5>
                      <Button content="TAGS" />
                      <Button content="GO" />
                      <Button content="HERE" />
                    </div>

                    <div className="col-md-3">
                      <h5>Tags</h5>
                      <h6>Select a tag group to see individual tags.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddFieldModal;
