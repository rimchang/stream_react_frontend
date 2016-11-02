import React , { Component } from 'react';
import {Popover, ButtonToolbar, Button, Overlay, Glyphicon} from 'react-bootstrap';

import DaumRoadViewDemo from './daummap'

export default class PopoverMap extends Component {
    
  constructor(props, context) {
    super(props, context);

    this.handleClick = e => {
      this.setState({ target: e.target, show: !this.state.show });
    };

    this.state = { show: false };
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.handleClick}>
          <Glyphicon glyph="glyphicon glyphicon-map-marker" />
        </Button>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="left"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom" >
            <strong>Holy guacamole!</strong> Check this info.
            <DaumRoadViewDemo />
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}
