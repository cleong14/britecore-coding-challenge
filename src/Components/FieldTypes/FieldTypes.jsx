import React, { Component } from 'react';
import Types from './Types';
import FilterTypes from './FilterTypes';
import { Button, Form } from 'semantic-ui-react';

class FieldTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: '',
      initialTypeList: [],
      matchedType: ''
    }

    console.log('CONSTRUCTOR PROPS', this.props.textButton);
    this.state.initialTypeList.push(this.props.textButton);

  }

  componentWillReceiveProps(props) {
    console.log('RECEIVED', props);
    // this.state.typeList.push(props.)
    // console.log('LENGTH', props.initialTypeList.length);
    // for(let i = 0; i < prop.initialTypeList.length; i++){
    //
    // }
    // this.setState({currentFilter: prop.searchText});
    // console.log('AFTER SET STATE', this.state);
    // console.log('DID UPDATE PROPS', this.props);
    // if(this.props.searchText !== this.state.currentFilter){
    //   for(let i = 0; i < this.props.initialTypeList.length; i++){
    //     this.state.typeList.push(this.props.initialTypeList[i]);
    //   }
    //   this.setState({currentFilter: this.props.searchText});
    // }
  }

  render() {
    console.log('FIELD TYPES PROPS', this.props);
    console.log('FIELD TYPES STATE', this.state);

    let typeRender;

    // if(this.props.initialTypeList.length){
    //   console.log('GOT LENGTH', this.props.initialTypeList.length);
    // }

    // if(this.state.currentFilter){
    //   console.log('GOT FILTER');
      // for(let i = 0; i < this.state.typeList.length; i++){
      //   console.log('EACH OBJ', this.state.typeList[i]);
      // }
    // }

    // if(!this.state.currentFilter){
    //   typeRender = (<FilterTypes />);
    //   console.log('NO FILTER', this.state.currentFilter);
    // }

    return (
      <div className="fieldTypes">
        {typeRender}
      </div>
    );
  }
}

export default FieldTypes;
