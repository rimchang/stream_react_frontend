import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, InputGroup, Button, Glyphicon, OverlayTrigger, Popover} from 'react-bootstrap';

import PopoverMap from './popovermap';

export class FieldFormControl extends Component {
  
  updateValue(e) {
      if( this.props.onChangeAction!==undefined )
              this.props.onChangeAction(e);

      this.props.input.onChange(e);
  }

  render () {

    const { placeholder, type, input, meta} = this.props;
    
    //console.log('hi im in fieldformcomponent',this.props);
    return (
      <FormGroup controlId={input.name} validationState={meta.error ? 'error' : 'success'}>
        <ControlLabel>{this.props.children}</ControlLabel>
        <FormControl 
          type={type} 
          placeholder={placeholder} 
          value={input.value} 
          onChange={this.updateValue.bind(this)}
          componentClass={this.props.componentClass}
        />
      </FormGroup>
    );
  }
}

const popoverRightconst = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

export class LocationFieldFormControl extends Component {
  
  updateValue(e) {
      if( this.props.onChangeAction!==undefined )
              this.props.onChangeAction(e);

      this.props.input.onChange(e);
  }
  
  popoverRender () {

    return (
        <PopoverRight />
      );
  }
  
  render () {

    const { placeholder, type, input, meta} = this.props;
    
    //console.log('hi im in fieldformcomponent',this.props);
    return (
      <FormGroup controlId={input.name} validationState={meta.error ? 'error' : 'success'}>
        <InputGroup>
          <ControlLabel>{this.props.children}</ControlLabel>
          <FormControl 
            type={type} 
            placeholder={placeholder} 
            value={input.value} 
            onChange={this.updateValue.bind(this)}
            componentClass={this.props.componentClass}
          />
          
          <InputGroup.Button>
            <PopoverMap term={input.value} />
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }
}