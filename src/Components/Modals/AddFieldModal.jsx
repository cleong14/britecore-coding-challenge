import React, { Component } from 'react';
import { Grid, Button, Header, Modal } from 'semantic-ui-react';

class AddFieldModal extends Component {
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
    console.log('MODAL STATE', this.state);
    return (
      <div className="AddFieldModal">
        <Modal
          trigger={<Button onClick={this.handleOpen}>Add Field</Button>}
          open={this.state.open}
          onClose={this.handleClose}
          size='fullscreen'
        >
          <Header className='modal-header' content='Commercial Property - Add Field' />
          <Grid columns={4}>
            <Grid.Row>
              <Modal.Content>
                <Grid.Column className='fieldTypes-column1'>
                  <h3>Field Types</h3>

                  
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
