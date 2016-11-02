import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Row, Col, Button, Input, } from 'react-bootstrap';
import _ from 'lodash';
import {
  DaumMapView,
  DaumMapOverlayOnMap, DaumMapOverlayOnScreen,
  DAUM_BASE_MAP_TYPES,
  DAUM_OVERLAY_MAP_TYPES,
} from 'react-daum-map';

const APIKEY = 'c3cf4c5ef5fd13dcbd3e67a3b31fb843';

export default class DaumRoadViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [37.566826, 126.9786567],
      reportedPosition: [null, null],
      note1Position: [37.566826, 126.97865],
      zoomLevel: 3,
      baseMapType: DAUM_BASE_MAP_TYPES.ROADMAP,
      children: [],
    }
  }
  handleAddChild = () => {
    const children = _.concat(this.state.children, [<h1> Some Child! </h1>]);
    this.setState({ children });
  }
  handleMove = (reportedPosition) => {
    this.setState({ reportedPosition });
  }
  handleZoomChange = (zoomLevel) => {
    this.setState({ zoomLevel });
  }
  handleSetBaseMapType = (event) => {
    const baseMapType = event.target.value;
    this.setState({ baseMapType });
  }
  handleZoomOut = () => {
    const zoomLevel = this.state.zoomLevel + 1;
    this.setState({ zoomLevel });
  }
  handleMovePositionUp = () => {
    const position = _.clone(this.state.position);
    position[0] = position[0] + 0.001;
    this.setState({ position });
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

